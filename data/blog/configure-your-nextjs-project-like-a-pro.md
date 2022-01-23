---
title: Configure your Next.js like a pro
slug: configure-your-nextjs-project-like-a-pro
cover: "/static/images/blogs/5.jpg"
description: Learn how to configure your Next.js project properly like you are the next google engineer
date: "2022-01-23"
read: 2 min
---

# Introduction

Sticking to a consistent code style is an important thing to consider as a programmers, especially when you are working within a large team/squad. Double quotes or single quote, how many tabs / spaces, semicolon or no, there is various small details that if you neglect, might cause a huge yet avoidable problem such as code readability problem.

When you are working on a small project (let say it is a simple company profile or small e-commerce), code readability might be not your priority. But as your project grow bigger over time, and small inconsistencies add up over the years, fixing incosistencies will be painful task. For instance, imagine improving code readability over small detail in 2 Billion LOC (Lines of Code) in google codebase.

In this guide, I will help you with that problem by:

- Setup your Next.JS projects using Typescript, ESLint, Prettier, and Husky.
- Lint and format your code to align to the style rules you defined in config.
- Auto-format and auto-style your code each time you save.
- Check if your code meets all of your style rules before you commit to git.

# Goal

At the end of the guide, you'll have a project that uses Next.JS and TypeScript to enforce Google's Typescript style guidelines when it comes to linting and formatting.
