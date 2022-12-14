---
title: Add github comment widget to your  site
slug: add-github-comment-widget-to-your-site
cover: "/static/images/blogs/6.jpg"
description: A comments system powered by GitHub Discussions. 💬 💎
date: "2022-02-07"
---

## Problem

By default, you can't add a comment system to a static generated site unless you use a third party help. As a developer using GitHub API to give our personal site a comment system is something fun and sometimes useful to do.

## Solution

There are two different option that you can choose , it's either giscus or utterances, the difference is that giscus utilize GitHub discussion API, while utterances utilize GitHub issues

## Goal

In this post, I will share step-by-step how to utilize Giscus to give our Next.js site a comment system.

### Step 1: Enable GitHub discussion

1. On GitHub.com, navigate to the main page of the repository.
2. Under your repository name, click ⚙️ Settings.
   ![public-repo-settings](https://docs.github.com/assets/cb-10598/images/help/discussions/public-repo-settings.png)

3. Under "Features", click Set up discussions.
   ![setup-discussions-button](https://docs.github.com/assets/cb-28344/images/help/discussions/setup-discussions-button.png)

4. Under "Start a new discussion," edit the template to align with the resources and tone you want to set for your community.
5. Click Start discussion.
   ![new-discussion-start-discussion-button](https://docs.github.com/assets/cb-22110/images/help/discussions/new-discussion-start-discussion-button.png)

### Step 2: Enable Giscus

Head to [https://github.com/apps/giscus](https://github.com/apps/giscus) and enable giscus in your desired repository

### Step 3: Get your repository API key

You can access your GitHub details via GitHub GraphQL API , you can access it [here](https://docs.github.com/en/graphql/overview/explorer) and then login with your GitHub account.

```javascript

query {
  repository(owner: "melvnl", name:"melvinliu.com"){
    id
    discussionCategories(first:10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
}

```

Basically, we are just making a request via GraphQL query to GitHub API to fetch our repository id, and our list of ten first discussion categories and its details (id, and name). The result will be something like this.

```javascript

{
  "data": {
    "repository": {
      "id": "R_kgDOGjYtbQ",
      "discussionCategories": {
        "edges": [
          {
            "node": {
              "id": "DIC_kwDOGjYtbc4CA_TR",
              "name": "Announcements"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOGjYtbc4CA_TS",
              "name": "General"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOGjYtbc4CA_TU",
              "name": "Ideas"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOGjYtbc4CA_TT",
              "name": "Q&A"
            }
          },
          {
            "node": {
              "id": "DIC_kwDOGjYtbc4CA_TV",
              "name": "Show and tell"
            }
          }
        ]
      }
    }
  }
}

```

### Step 4: Install @giscus/react package

> yarn add @giscus/react
> or
> npm i @giscus/react

### Step 5: Import and use Giscus component

```javascript
import { Giscus } from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      repo="melvnl/melvinliu.com"
      repoId="R_kgDOGjYtbQ"
      category="General"
      categoryId="DIC_kwDOGjYtbc4CA_TS"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      theme="dark"
    />
  );
}
```

![Giscus](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n7zszi3sleq98u889puj.png)
It will render a GitHub comment widget where other developer can sign in using their GitHub account to comment through GitHub Discussion API.

That's it folks! Hope this tutorial help, and happy hacking!

**Reference:**

https://giscus.app/
https://graphql.org/
https://www.freecodecamp.org/news/graphql-vs-rest-api/

**You can find me on**

Twitter: https://twitter.com/mlven23
GitHub: https://github.com/melvnl
LinkedIn: https://www.linkedin.com/in/melvin-liu/

**Note**: If you have any questions, you can leave a message below by Sign In with your GitHub account 😉
