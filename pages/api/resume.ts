import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { password } = req.query;

  if (!password || password != process.env.RESUME_AUTH) {
    res.status(401).json({ error: "401: Unauthorized Access" });
    return;
  }

  const resumePath = path.join(process.cwd(), "private", "resume.pdf");

  if (!fs.existsSync(resumePath)) {
    res.status(404).json({ error: "PDF file not found" });
    return;
  }

  const pdfFile = fs.readFileSync(resumePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=Melvin_Software_Engineer_Resume.pdf"
  );

  res.status(200).send(pdfFile);
}
