---
title: Email.js Integration
slug: email-js-integration
description: html emails and attachments to any smtp server with nodejs
---

# Emailjs

html emails and attachments to any smtp server with nodejs

### Description

This page show snippet to integrate email.js with react

### Code

```javascript

export default function Form() {

  //this env variable can be found on your email.js dashboard
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

  const [message, setMessage] = useState(false);
  const [formStatus, setFormStatus] = useState(0);

  const [data, setData] = useState({
    name: "",
    email: "",
    entity: "",
    timeframe: "2-3 months",
    brief: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendForm = (e: any) => {
    e.preventDefault();

    send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
      .then((response) => {
        setMessage(true);
        setFormStatus(response.status);
        setData({
          name: "",
          email: "",
          entity: "",
          timeframe: "2-3 months",
          brief: "",
        });
      })
      .catch((err) => {});
  };
  return (
    <form className=" md:ml-20 w-full max-w-3xl" onSubmit={sendForm}>
      ...
    </form>
  );
}
}

```
