---
title: You need NVM! - Node Version Manager
slug: you-need-nvm
cover: "/static/images/blogs/2.png"
blurUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABXqADAAQAAAABAAAAjAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAjAFeAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMACQkJCQkJEAkJEBYQEBAWHhYWFhYeJh4eHh4eJi4mJiYmJiYuLi4uLi4uLjc3Nzc3N0BAQEBASEhISEhISEhISP/bAEMBCwwMEhESHxERH0szKjNLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS//dAAQAFv/aAAwDAQACEQMRAD8A9wpKWkoAKSlpKAEpKWkoAbSUtJQA2kp1NoASkpaSgBKKKKAEpaKKACloooAWlpKWmA6lpKWgBadTadQAtFFFIBaWkpaACiiigYlJS0lACUlLSUANptOptMYlNNOppoAaaSlNIaBjaSlpKAEopaSgD//Q9wpKWkoAKSlpKAEpKWkoASm06koAbSUtJQAlJS0lACUUtJQAlLRRQAUtFFMBaWkpaAFpaSloAWnU2loAWlpKWkAtFFFAC0lFFAwpKKSgApKWm0wEptOptAxKaadSUANptOptAxKSlpKAEopaSgD/0fcKSlooASkpaSgBKSnUlADaSnUlADaSnUlADaSnUlACUlOpKYCUUtFACUtFLQAUtJS0AFLRS0ALRRRQAtLSUUgFpaSigBaKKSgYUlLSUAJSUtJQAlNp1JTGNpKWkoASm06koGNpKdSUANopaKAP/9L3CiiigBKKKKAEpKWkoASkp1JQA2kp1JQAlJS0UANopaKAEopaKAEopaKACloooAKWiimAtFFFAC0UUUgFopKWgAooopjEooopAJSUtJQAlJS0lMYlJS0lACUlLRQA2kp1JQMSkp1FAH//0/cKKKKYBSUtJSASilpKAEpKWigBtFLSUAJSUtFACUUUUAJRS0UAJS0UUAFLSUtABRRS0AFFFFAC0UUUAFLSUtABRRRTGJRS0lIBKKKKAEpKWkpgJSU6koGNpKdSUAJSU6koASilooA//9T3CilpKACkpaKAEpKWkoAKSlpKAEpKWigBKSlpKACkpaKAEooooEFFFLQMKKKKACloooAKWiigAoopaACiiigAooooAKSlooGJSU6koASkpaKAG0UtJQAlJTqSgBKSnUlMBKKWigD/1fcaKKKAEooooASiiigBKSlpKAEpKWkoAKSlpKACkpaSgAooooEFLSUUDFooooAWiiigBaKKWgAooooAKWiigAooooAKSlooASilpKAEpKdSUDEpKWimA2ilopANopaKAEpKdSUAf//W9xooooASiiigBKKKKAEpKWkoASkpaSgBKKKKBCUUUUAFFFFABRRRQAtFFFAxaWkpaAClpKWgApaKKACilooAKKKKACkpaKAEooooASkpaKAEpKWkoASilpKAEopaKAEooooA/9f3GiiigBKKKKAEpKWkoAKSlpKAEpKWkoASiiigQlFFFABRRRSAKKKKYC0UUUDFpaSloAKWiigBaKKKAFooooAKKWigBKKKKACkpaSgApKWkpgJRS0lACUlLRQAlFFFABRRRQB//9k="
description: Explaining why you need NVM to change between node version without pain
date: "2021-10-23"
---

### Backstory

Have you ever experience difficulties in software development due to unsupported / different version ? Recently I was facing the same issue. The issue was a different Node.js version from my machine (Node v14.18.0) with my company project repository (Node v10 required). The first solution that instantly pop up in my mind was "I think downgrade my current node by uninstalling it will do the work", But what if you need another version for another project in the near future? Do you want to endure the pain of installing and uninstalling Node.js every time you need a different version of it ?

# Node Version Manager

![Node Version Manager](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/udz5vnnvog98sw77cz01.png)

[NVM](https://github.com/nvm-sh/nvm) is a version manager for Node.js, it allows you to quickly install and use different versions of node via the command line.

Let's head to the tutorial !

# Instaling Node Version Manager Guide

If you happen to use UNIX, macOS, or WSL (Window Sub-system for Linux), you can install and read the official documentation [here](https://github.com/nvm-sh/nvm#installing-and-updating)

If you happen to use Windows you can install it at [NVM for windows](https://github.com/coreybutler/nvm-windows/releases) which is developed by [Corey Butler](https://github.com/coreybutler), download the **nvm-setup.zip** file.
![NVM for windows github](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bnrg645478ndqxn0ly2g.png)

### Important Note

![Installation Guide Github](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nszt5bl3y1n7adxc6q7d.png)
It is stated that you need to uninstall pre-existing node version, but based on my experience it is not necessary to do so.

After the installation you can open your command prompt and check whether nvm is recognized

```
C:\Users\YourUsername>nvm -v

Running version 1.1.8.
```

If nvm is not recognized as internal command or external command, try to re-open your command prompt.

Then, You can type **nvm list** in order to see list of Node.js version on your machine.

```
C:\Users\YourUsername>nvm list

  * 14.18.0 (Currently using 64-bit executable)
    10.18.0
```

If you don't see your desired Node.js version in the list, you can use **nvm install** command, for example if you want Node.js version 8, you can type **nvm install 8.0.0**

To use the installed Node.js version you can simply type **nvm use 8.0.0**

### Note

If you see an error message _exit status 5: Access is denied._, It is due to admin privilege issue. To solve it you can simply run your command prompt as administrator.

Thank you for your time reading this short article / tutorial about Node Version Manager, hope it helps! and Have a great day.

**Note**: If you have any questions, you can leave a message below by Sign In with your GitHub account 😉
