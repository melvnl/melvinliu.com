---
title: Upload File to Strapi
slug: upload-file-to-strapi
cover: "/static/images/blogs/3.png"
description: Send form data to strapi backend is quite tricky, here is how!
date: "2021-10-13"
read: 2 min
---

When I first started using Strapi as a CMS for one of my client, to give them a little freedom to manage their website content, the hardest part of the development was when I need to build a feature where there is a contact form which people can add and send an attachment (pdf/zip/image/etc.)
![Contact Form Screenshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8i1imon4war4yf1ghqpb.jpg)

If I'm not mistaken, there is no official documentation regarding this on Strapi website, but after a few research, I discovered the step to do it.

---

### 1. Enable user permission to upload

Strapi has an upload plugin, that can enable user to upload file to strapi, make sure you check the upload checklist like the image below)
![Strapi Upload Plugin Setting](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nj3d4u4h92oz2gmho2tz.png)

You can find the section in your-url.com/admin/settings/users-permissions/roles

### 2. Send file to Strapi

First, you need to send your file first to Strapi before submit the entire form data. Later, you can link the file and your form data using the id of the file that has been uploaded. For the code example I'm using axios to fetch the request.

```javascript
const [selectedFile, setSelectedFile] = useState(null);

let file = new FormData();
file.append("files", selectedFile);

axios
  .post("your-strapi-url/upload", file)
  .then((response) => {
    const fileId = response.data[0].id;
  })
  .catch((error) => {
    //handle error
  });
```

### 3. Send the form data to Strapi

You can use React useState or other method to store your form value, then create a FormData based on those value. Then the whole code will probably look like this

```javascript
let formData = new FormData();
formData.append("fullName", name);
formData.append("companyName", company);
formData.append("email", email);
formData.append("phoneNumber", phone);
formData.append("team", phone);
formData.append("files", selectedFile);
formData.append("message", message);

axios
  .post("your-strapi-url/upload", file)
  .then((response) => {
    const fileId = response.data[0].id;

    axios({
      method: "post",
      url: "your-strapi-url/contact-submissions",
      data: {
        fullName: name,
        companyName: company,
        email: email,
        phoneNumber: phone,
        team: team,
        attachments: fileId,
        message: message,
      },
    })
      .then(({ data }) => {
        setResponse(data);
      })
      .catch((error) => {
        //handle error
      });
  })
  .catch((error) => {
    //handle error
  });
```

Since we have uploaded the file before the whole data, hence on the second request we only need to send the Strapi fileId that is attached with the file that we have uploaded previously.

**Note: the endpoint "contact-submissions" is my own custom endpoint, where my client can see the data that their costumer has sent through the contact form.**

I hope this short tutorial / article is helpful. Have a good day!
