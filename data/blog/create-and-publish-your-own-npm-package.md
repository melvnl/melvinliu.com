---
title: Create and Publish Your Own NPM Package
slug: create-and-publish-your-own-npm-package
cover: "/static/images/blogs/8.jpg"
description: How to create and publish your own NPM package in minutes!
date: "2022-03-09"
---

## Overview

You probably wonder how to create your npm package and let people use it easily with just a single command (npm install/yarn add). In this article, I'm going to show you how to publish your npm package, and test it locally before publishing it 🚀

### Step 1: Create NPM account

Go to [https://www.npmjs.com/](https://www.npmjs.com/) to create an account. After you have verified your npmjs account. Open your terminal and type:

```bash
npm login
```

Input your credentials (username, password, and email).

### Step 2: Set Up a New NPM Package

Create a package.json by typing

```bash
npm init
```

With the following settings:

- Package Name: The name of your package (Check the NPM website to see whether the name is available)
- Version: 1.0.0
- Description: This will appear on the NPM page so make it helpful for users
- Entry Point: index.js
- Test Command: You can leave this blank at the moment
- GitHub Repository: If you have a GitHub repo for your module, then add it here. This will appear on the NPM page
- Keywords: This will make it easier for developers to find your package
- Author: Your name
- License: ISC (This is the boilerplate license for open-source software)

### Step 3: Create index.js

In this example, I'm going to use my package: [discord-alert](https://github.com/melvnl/discord-alert) as an example (I create a discord alert npm package with javascript to send me a notification/message to discord when a certain event is triggered).

Create an index.js file that serves as as the main file or the main gateway for our package at the root of your project.

For our code, we are going to define an export default function that makes an HTTP request each time it's called.

```javascript
// fetch api already introduced in Node v17 as experimental feature,
// hence we can use it without importing other dependency in the future
import fetch from "node-fetch";

export default function Notification(url, message) {
  fetch(url, {
    body: JSON.stringify({
      content: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then(function (res) {})
    .catch(function (res) {
      console.log(res);
    });
}
```

### Step 4: Test The Package Locally

Before we publish our work, we need to make sure it "really works". Hence we need to test it locally first by using:

```bash
npm link your-package-name
```

This command will link your current app/project with the package that you have locally (let's say you have a project written in react, let's call it book-app-store, to test the discord-alert package, you can type **npm link discord-alert**, and use it locally to make sure whether it's work)

### Step 5: Publish

Run

```bash
npm publish
```

and you will receive an email notification from npmjs that your package is already shipped 🥳

**_Note:_** npmjs and yarnpkg are somehow connected hence if you publish it to npm , it also shipped to yarn , read [this](https://stackoverflow.com/questions/58071109/difference-between-yarn-registry-and-npm-registry) for further information.
