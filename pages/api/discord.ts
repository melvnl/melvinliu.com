import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { content, type } = req.body;

  const typeObj = {
    support: process.env.DC_SUPPORT,
    inquiry: process.env.DC_INQUIRY,
  };

  if (!content) {
    return res.status(400).json({ error: "There is no content" });
  }

  try {
    const webhook = typeObj[type as keyof typeof typeObj];
    const response = await fetch(`${webhook}`, {
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error with API`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
