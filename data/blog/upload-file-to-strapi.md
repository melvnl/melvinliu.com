---
title: Upload File to Strapi
slug: upload-file-to-strapi
cover: "/static/images/blogs/3.png"
blurUrl: "data:image/jpeg;base64,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"
description: Send form data to strapi backend is quite tricky, here is how!
date: "2021-10-13"
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

I hope this short tutorial / article is helpful. Have a good day!

**Note**: If you have any questions, you can leave a message below by Sign In with your GitHub account 😉
