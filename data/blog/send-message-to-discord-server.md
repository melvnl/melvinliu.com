---
title: Send Message to Discord Server
slug: send-message-to-discord-server
cover: "/static/images/blogs/7.png"
blurUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABfKADAAQAAAABAAAAjAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAjAF8AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMACQkJCQkJEAkJEBYQEBAWHhYWFhYeJh4eHh4eJi4mJiYmJiYuLi4uLi4uLjc3Nzc3N0BAQEBASEhISEhISEhISP/bAEMBCwwMEhESHxERH0szKjNLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS//dAAQAGP/aAAwDAQACEQMRAD8A9vopKKChaKSigBaKSigBaKSigBaKSigQtFJRSAWikooAWikpaACiiigBaKSigBaKSigBaKSigBaKKKACiiigAooooAKKKKACiikoAWikooAWikooAKKKKACiiigAooooAKKKKACiiigD/9D2vNGajzRmnYokzRmo80ZosBJmjNR5ozRYCTNGajzRmiwEuaM1HmjNFhEmaM1HmjNAEmaM1HmjNICTNGaZmjNAD80uajzRmgCTNGaZmjNAD80ZpmaM0APzRmmZpc0APzRmmZozQA/NFMzRmgB9FMzRmgB9FMzRmgB9FMzRmgB9FMzRmgY+imZozQA6im5pM0APozTM0ZpAPzRmmZozQA/NGaZmjNAD80ZpmaM0Af/R9i3Ubqh3UZrSwE26jNRZozRYCXNGaizRmiwEuaXNQ5pc0WAlzRmos0ZpWAmzRmos0ZosBLmjNR5ozRYCXNGajzRmlYZJmjNR5pc0WAkzRmo80ZosBJmjNMzRmiwEmaM1HmjNFgJM0ZpmaM0WAfmjNMzRmlYCTNGajzRmmBJmjNR5ozSsBJmjNR5ozRYCTNGajzRmgB+aM0zNGaLAPzRmmZozRYB+aM0zNGaAH5ozTM0ZoAfmjNMzRmgB+aM0zNGaAP/S9YzRmo80ZrcRJmjNR5pc0APzS5qPNGaVgJM0ZqPNLmgCTNGajzS5oAkzRmo80uaQEmaM1HmlzQMkzRmmZozSAkzRmmZozQA/NLmmZozQA/NLmmUUgH5ozTKKAH5pc0zNGaAH5ozTM0ZoAfmjNMzS5oAdmjNNzRQA7NGabmjNADs0ZpuaKAHZozTaM0AOzRmm5ozQA7NGaZRQA/NGaZRQA/NGaZmjNIB2aM03NGaAP//T9Soopa3JCiiigAooooGLRRRQAUtJS0AFLSUtIBaKSloAWiiikAtLSUUALS0lFIYtLSUUALRSUtABS0lFAC0UlFAC0UlLQAUUUUCCiiigAooooAKKKKQBRRSUALRSUUALRSUUALRSUUALRSUUAf/U9UxRipMUYra4iPFLin4oxRcBmKMU/FGKLgMxS4p+KMUXAZilxTsUuKVwGYpcU7FGKLjG4oxT8UYpANxS4p2KMUANxS4pcUuKAG0U7FLigBtGKdijFIBuKWnYoxQA3FGKdijFADcUU7FGKAG0tOooAbRTsUYoAbRTsUYoAbRTsUmKAEopcUYoAbRTqMUANop2KMUANop2KKAG0U7FGKQDaKdijFAH/9X1zFGKlxRiruMixS4qTFGKLgR4oxUmKMUXAjxRipMUYouBHilxUmKMUXAjxRipMUYpXAjxS4p+KMUXAZijFSYoxRcBmKMU/FGKLgMxRin4oxRcBuKMU/FGKQDMUYp+KMUANxRin4oxQAzFGKfijFADMUYp+KMUAMxRin4oxQAzFGKfijFADMUYp+KMUAMxRin4pMUAMxRin4oxQAzFGKfijFFwGYoxT8UYoAZijFPxSYoAbijFOxRigD//1vZsUYp+KMUXKGYoxT8UYouAzFGKfijFFwGYoxT8UYouAzFGKfijFFwGYoxT8UUAMxRin0YoAZijFPxRigBmKMU+jFADMUuKdijFADcUYp2KMUANxRin4oxQAzFGKfiigBmKXFOooAbijFOooAbijFOooAbijFOoxQA3FJin4oxQAzFGKdijFADcUYp2KKAG4oxTqKQDMUYp+KTFMBuKMU7FFIBuKMU6igD/1/bKKWikWJijFFFABijFFFABRRRQITFFLRQAlFLRQAmKKKKACiiigAooooAKKKKACiiloASilooASilooASloooAKKKKACiiigAooooAKSlooASilooASiiigApKWigBKKWkoAKKKKACiiigD//Z"
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
