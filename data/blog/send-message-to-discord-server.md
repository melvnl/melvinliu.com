---
title: Send Message to Discord Server
slug: send-message-to-discord-server
cover: "/static/images/blogs/7.png"
description: Send a message / notification to discord server from your project/app.
date: "2022-03-02"
---

### Problem

Recently I added a new feature to this site, which is a recommendation feature where people can sign in using either Github / Google credentials and give me their recommendation. Is it such a waste of time to keep checking on the page to see any new data, hence I think if each time user adds new data and the system notifies me it will be much more convenient? I choose discord instead of email, due to the simplicity of sending a message using a discord bot than using Gmail. Below are the steps!

### Step 1: Create a Discord server

[How to Create Discord Server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-)

### Step 2: Create a webhook in the server

Edit Channel -> Create Webhook -> Copy the webhook url (should look like this "https://discord.com/api/webhooks/{random_text_here}")

### Step 3: Create a http request

There are several way to create a http request (fetch, axios, etc). In this example I'll be using a simple fetch request.

```javascript
fetch("your_webhook_url", {
  body: JSON.stringify({
    content: `type your message here`,
  }),
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
})
  .then(function (res) {
    console.log(res);
  })
  .catch(function (res) {
    console.log(res);
  });
```

Voila. All that you need is just a simple webhook URL. Each time you trigger the HTTP request it will send a message to your discord server via bot. I'm using it in my [recommendation page](https://www.melvinliu.com/support).
![result](/static/images/blogs/discord/result.png)

If you have any question, you are welcome to add a comment below by sign in using your Github account 😉
