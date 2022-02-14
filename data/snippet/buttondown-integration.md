---
title: Buttondown Integration
slug: buttondown-integration
description: Buttondown is a small, elegant tool for producing newsletters
---

# Buttondown

Buttondown is a small, elegant tool for producing newsletters. The minimalist interface makes it easy for you to write great emails;

### Description

This page show snippet to integrate buttondown with Next.js

### Code

```javascript

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({ email }),
        headers: {
          Authorization: `Token ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Comeback Later`,
      });
    }

    return res.status(201).json({ error: "" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}


```
