---
title: Escape If-else hell in Javascript
slug: escape-if-else-hell-in-javascript
cover: "/static/images/blogs/4.png"
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
