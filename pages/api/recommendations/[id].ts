import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  const { id } = req.query;
  const email = session?.user?.email;

  const entry = await prisma.users.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (req.method === "GET") {
    return res.json({
      id: entry?.id.toString(),
      name: entry?.name,
      email: entry?.email,
      date: entry?.date,
      company: entry?.company,
      message: entry?.message,
    });
  }

  if (!session || email !== entry?.email) {
    return res.status(403).send("Unauthorized");
  }

  if (req.method === "DELETE") {
    await prisma.users.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(204).json({});
  }

  if (req.method === "PUT") {
    const message = (req.body.message || "").slice(0, 500);

    await prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        message,
      },
    });

    return res.status(201).json({
      ...entry,
      message,
    });
  }

  return res.send("Method not allowed.");
}
