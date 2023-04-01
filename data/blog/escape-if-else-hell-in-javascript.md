---
title: Escape If-else hell in Javascript
slug: escape-if-else-hell-in-javascript
cover: "/static/images/blogs/4.png"
blurUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABfKADAAQAAAABAAAAjAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAjAF8AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMACQkJCQkJEAkJEBYQEBAWHhYWFhYeJh4eHh4eJi4mJiYmJiYuLi4uLi4uLjc3Nzc3N0BAQEBASEhISEhISEhISP/bAEMBCwwMEhESHxERH0szKjNLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS//dAAQAGP/aAAwDAQACEQMRAD8A9vpKWigYlFFFABRRSUAFJS0lACUlLSUAJRRSUAFJRRQAUUlFAC0lFFAC0UlFAC0tJRQAtLSUUALS0lFAC0tJS0AFLSUtABS0lFAC0UUUgCiiimAUUUUAFFFFAwpKKKACiikpAFFFFABRRRQB/9D2+iiigYlFFFABSUtJQAlJS0lACUlLTaACkopKACikooAKKSkoAdRTaKAHUU2jNADqWm0UAOpabS0AOpabRQA6lptLQA6ikpaAFopKWkAUtJRQAtFJRQAtFJRTGLSUUUAFFFJQAUUUUAFFJRQAUUUUAf/R9vooooGJRRRQAUlFJQAlJS02gAptLTaACkopKACkopKACikpM0ALmjNNozTAdmlzTM0uaAHZpc0zNLmkA6lpuaKAH0tMp1ADqWm0tADqWm0UgHUtNpaAFpaSigBaKSigBaKSigYtJRRTAKKKSgQtJRRQMKKSigBaKSigD//S9vooooGJRRSUhhSUUlMQlJS02gBKSikoASkopKAEpKKSmAUlFJQAtJSUUALS02igB1LTaKAH0tMpaQD6WmUtAD6Wm0tADqWm0tIB1LTaKAH0U2loAWikpaACiiigAopKKYC0UlFABRRSUALRSUUALSUUUDP/0/b6SiikMKSikoAKSlptMBKSlptACGmmnU00AJTaU0lADaSlpKYCUlLSUAJRRSUALRSUUALS0lFAhaWm0tIB9LTKWgY+lptLQA6lptLQA6lptFIB9LTKWgB1FJRQA6ikooAWkoopgFFFJQAtFJRQAtFJRQAUUUUAf//U9toopKQxaSikoAKSlpKYCU2lpKAEptOptADTSU6m0wG0lOpKAG0lOpKAG0UtJQISilooASiiigBaKKKQC0tJRQA6lptLQMfS0yloAdS02loAdS02ikA6lptLQAtLTaWmAtFJRQAtFJS0AFFFFABRRRQAUUUUAf/V9sopKKBhRRSUAFJS0lACUlLSUAJSUtJQA2kp1JTAbSU6koAbSU6koENpKdSUAJSU6koASilpKACiiigApaSikAtLSUUAOpabS0DHUtNooAfRTaWgB1LTaWgBaWm0tAC0tJRQAtFFFABS0lLQAUUUUAFFFFAH/9b2qiiigYUUUUAJRRRQAlJS0UAJSUtJQAlJS0lACUlLRTENpKdSUANopaSgBKSnUlACUlLRQAlJS0UAJRRRSAWikpaAClpKKAHUUlLQMWlptLQA6lptLQA6ikpaAFpaSigBaWkpaAClpKWgAoopaAEpaKKAP//X9qooooGFJS0lABRRRQAlFFFACUlLRQAlJS0lACUlLSUCEopaSgBKSlpKYCUlLRQAlJS0lACUUtJQAUlLSUgCiiigApaSloAKWkpaAFpaSigY6lptLQA6ikpaAFpaSloAWlpKWgApaSloAKWkpaACiiigD//Z"
description: You probably need to refactor that deep nested conditional if-else statement.
date: "2021-10-31"
---

### Backstory / Problem

Few months ago, there is a certain case where I need to calculate the percentage of input file in each form that user has filled (It was for a react native app that take user feedback by filling several form that represent different category such as personal information form, the user property information, etc.), the system flow look like this in a nutshell.

![System flow in nutshell](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3jaxjtqua09bslt0e1qq.jpg)

The first approach was using if/else statement to handle the conditional logic. Although it might be a good idea for one or two conditions here and there, using multiple if-else statements chained together will make your code look very ugly, and less readable, and for my case there is probably more than 30 if-else statements in scattered in 5 different forms. Not gonna lie, it look very simple and straight to the point, yet painful to read.

Also, when my peer reviewing the PR, he refers something humorous in reddit about [the code behind yandere simulator](https://www.reddit.com/r/ProgrammerHumor/comments/53uhsw/the_code_behind_yandere_simulator/)
![Yandere Simulator code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/j5m0oeqx4w8xcva3hf6x.png)

As you can see, it is a hell of if-else statements.

### The solution

The solution will be vary, depends on your case / need. But most likely the thing that you need is **object**. As for instance, let's say you need to return a string based on a key

```JavaScript
function checkStatus(status) {
    if (status.toLowerCase() === 'available') {
        return `The user is currently available`
    } else if (status.toLowerCase() === 'busy') {
        return `The user is currently busy`
    } else if (status.toLowerCase() === 'away') {
        return `The user is away from keyboard`
    } else if (status.toLowerCase() === 'breaktime') {
        return `The user is having a good lunch`
    }
}
```

Just imagine if you have other 20+ status type ? Will you be comfortable reading or writing that much line of if-else statements?

Instead we can use object or **Map object** to make a sort of table consist of paired key and value to look up to.

```javascript
function checkStatus(status) {
  const statusList = {
    available: "The user is currently available",
    busy: "The user is currently busy",
    away: "The user is currently away from keyboard",
    breaktime: "The user is currently having a good lunc",
  };

  return statusList[status]; //console.log(statusList[status])
}
```

This can be also applied in algorithm leetcode-type-of-question to save you up some time from writing repeated if-else statement over and over again.

Thanks for reading!!!
Have a good day, and remember that project you always think about won't code itself 🤪.

**Note**: If you have any questions, you can leave a message below by Sign In with your GitHub account 😉
