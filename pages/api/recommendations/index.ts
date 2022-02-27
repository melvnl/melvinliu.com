import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const entries = await prisma.users.findMany({
      orderBy: {
        date: "desc",
      },
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        name: entry.name,
        email: entry.email,
        date: entry.date,
        company: entry.company,
        message: entry.message,
      }))
    );
  }

  const session = await getSession({ req });
  const name: any = session?.user?.name;
  const email: any = session?.user?.email;

  if (!session) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "POST") {
    const newEntry = await prisma.users.create({
      data: {
        name,
        email,
        date: new Date(),
        company: req.body.company || "",
        message: (req.body.message || "").slice(0, 500),
      },
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      name: newEntry.name,
      email: newEntry.email,
      date: newEntry.date,
      company: newEntry.company,
      message: newEntry.message,
    });
  }

  return res.send("Method not allowed.");
}
