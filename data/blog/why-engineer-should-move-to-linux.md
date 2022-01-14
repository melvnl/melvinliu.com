---
title: Why engineer should move to Linux
slug: why-engineer-should-move-to-linux
cover: "/static/images/blogs/1.jpg"
description: Bunch of technical reasons why Windows bad for software engineer.
date: Dec 10, 2021
read: 2 min
---

### Backstory

I was lucky enough to be accepted as an intern at the [first unicorn in my country that goes IPO](https://about.bukalapak.com/en/) for software engineer position, as a large tech e-commerce company that exist for 11 years the technology used behind must be quite mature, and more complex than usual (micro-frontend, micro-services, different virtual private network to access certain repository, private npm library, etc.).

I've been using windows since my first day of college as a computer science student, and I should say that there is a few moment where I'm really stressed spending hours setting up the development environment (PATH, and mostly adjusting incompatible library). But I hit my breaking point a few weeks ago, due to incompatibility with my company codebase that is developed in UNIX operating system (like Mac or Linux), here's the list of my main problem :

- Incompatible or missing packages, for instance [this](https://stackoverflow.com/questions/12917569/cmd-patch-is-not-recognised-as-an-internal-external-command-operable-program/18851897) and [this](https://www.npmjs.com/package/link-module-alias)
- Failed to install dependencies due to [node-gyp error](https://stackoverflow.com/questions/45801457/node-js-python-not-found-exception-due-to-node-sass-and-node-gyp/53009640#53009640)
- Illegal file name in windows, but allowed in UNIX
- A few more

My friend keep suggesting me to implement dual boot, but I'm quite afraid that my machine will break down, or something will go wrong during the installation since I'm using a quite old machine (ASUS x550j from 2016). Hence I'm looking for alternative solutions.

### Trying WSL (Windows Subsystem for Linux)

I still want to play valorant during my work hours #oops. Hence I tried WSL, unfortunately I had a difficult time setting up openvpn in WSL due to certain networking issue. Without vpn I couldn't run the repository that I was working on. After a few cup of coffees, I finally give in to dual boot.

### Using Dual Booth

In the end , I decided to implement dual boot in my machine. I'm following this tutorial from [youtube](https://www.youtube.com/watch?v=-iSAyiicyQY&t=622s) to install Ubuntu along with my windows OS. Now, why Ubuntu ? why not arch-Linux? or other cool distros? Simple, I'm not a hardcore Linux fanboy, and there is this class in my 4th semester that teach terminal with Ubuntu, hence I've previous familiarity.

### What is like after a week using Linux

Here is few things that I noticed:

- My laptop's fan is much calmer (Usually it often make annoying noises, especially when I'm using an IDE)
- I also noticed that when I'm idle, Linux doesn't eat as much RAM as Windows does.
- and the most important is that I haven't face any incompatibility problem so far

### Conclusion

As an engineer, I highly suggest you to move from windows to UNIX based like Linux or Mac as soon as you can. Here ! Have some Linus Trovalds Meme!.
![Linux Trovalds mad at Nvidia](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/usyzcxrtl18yu7497luw.png)
