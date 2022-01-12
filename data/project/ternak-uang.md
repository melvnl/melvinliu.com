---
id: 3
title: Ternak Uang
slug: ternak-uang
cover: "/static/images/projects/project/3.png"
description: Ternak Uang is a digital platform to learn investment (from stocks, mutual funds, peer-to-peer, to cyptocurrency)
date: Dec 10, 2021
---

![Ternak Uang](/static/images/projects/project/3.png)

> ## Short Explanation

This specific project was developed to show realtime Indonesia stock price for Ternak Uang mobile app user. The feature was taken down due to restricted API access.

> ## Project Goals

This project objective is to give information about Indonesia Stock Price for Ternak Uang User. This graph should show Index Harga Saham Gabungan (IHSG) real time price, along with that day open price, max, and min value. The graph will turn green (#5CED7B) if the current price is higher than open price, and red (#E25357) if vice versa.

> ## Research

![Victory Native](https://blog.logrocket.com/wp-content/uploads/2020/11/victory-native.gif)
In order to achieve the goals within the given timeline, also for efficiency matters, I didn't build the graph from scratch, I took around 2-3 days researching, there is a lot of react native chart library out there that I can pick, hence I need to lay some standard rule to filter out which one is the most suitable for this project.

### Library criteria / rule

Here few criteria that I use as the standard to pick the right library, start from the most crucial to least:

- **Documentation** : Documentation is paramount in software engineering, this is fastest way for us to understand "how to implement" the library / technology properly without hidrance.
- **Creator credibility** : Who started / wrote the code is also important, I judge the creator credibility by the experience or positive feedback from user who had used the library before.
- **Repository Issues** : The more open issue in a library, mean we need to search deeper whether it mostly an ingoreable issue, or a critical issue, since it will probably impact how we use the library to our project, and since this stock chart is a bug sensitive feature, I really need to make sure the graph won't break or show anomali in produciton.
- **Github Star** : Github start is the easiest way to tell whether people like the library or not (since I do believe that software engineer tend to be more objective towards open source project)

After a few trial and error with several pick, I lay may final decisioun with [VICTORY NATIVE](https://github.com/FormidableLabs/victory), a collection of composable React components for building interactive data visualizations in React Native, backed by [Formiddable](https://formidable.com/) - a software development agency based in Seattle, Washington.

> ## The Problems and How I Deal With It

Since it is my first "Big Project", I faced several difficulties developing the chart, for instace:

- There is no automatic middle line that can move within the graph axis according to the max price , min price , and that day open price value
- Testing the graph can be done within stock exchange time (9AM - 3.30 PM in workday), makes me unable to test the graph outside that time, I know it can be solved using mock data, but at that time I'm not capable enough to implement it.
- Apparently responsiveness in mobile device is really tricky, regardless I was able to make it responsive.

> ## What Happen Next ?

The feature seems to be taken down due to the API issue, we were using a third-party API that suddenly restrict us to access the API, though the feature was up in the iOS for several days, and it was a really proud day for me. 😎
