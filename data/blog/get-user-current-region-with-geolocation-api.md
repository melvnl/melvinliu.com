---
title: Get User Current Region With Geolocation API
slug: get-user-current-region-with-geolocation-api
cover: "/static/images/blogs/10.jpg"
description: How to get user current region/country location with Geolocation API in javascript.
date: "2022-11-01"
read: 2 min
---

### Problem

A few weeks ago, one of my clients required me to implement geolocation detection on their site. They want to show different content and store user form submission to a different API endpoint depending on their location (ex: if a user is currently in the Singapore region, the site will show Singapore content only & POST the user form submission data to the Singapore endpoint). In this article I'll show different cases of handling this kind of feature.


### Geolocation

Officially modern browsers already exposed their own native official geolocation feature (read this [https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)), BUT ,since it is quite a hassle to set it up in the project, I found a great alternative which is [https://geolocation-db.com/](https://geolocation-db.com/json/) that only require an API call

### Geolocation-DB
---
**_NOTE:_**

ℹ️  If you open the home URL it will show 502 Bad Gateway, insted open https://geolocation-db.com/json/

---

https://geolocation-db.com/json/ will result in this :

``` javascript
{
  "country_code":"ID",
  "country_name":"Indonesia",
  "city":"Denpasar",
  "postal":null,
  "latitude":-8.65,
  "longitude":115.2167,
  "IPv4":"182.253.155.163",
  "state":"Bali"
}
```

### Usage

Since I will be using Javascript with axios, here is the function that I wrote to GET the endpoint result

``` javascript
// getLocation.js
import axios from "axios";

export const getLocation = async () => {
  const API_URL = `https://geolocation-db.com/json/`;
  const response = await axios.get(API_URL);

  return response.data;
};
```

To check whether the function/API works, you can utilize your favorite VPN 😏. You can manipulate it into a standalone library or include it in the component/customize it as a react hook (maybe useLocation hooks or something)

If you have any question feel free to ask in the comment section below ⬇️
