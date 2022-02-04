---
title: Format Date
slug: format-date
description: Format date with date-fns
---

# Format Date

Format date with date-fns

### using date-fns

### Code

```javascript
import { parseISO, format } from "date-fns";

date = 2021 - 10 - 31; //without space
format(parseISO(date), "MMMM dd, yyyy");
```

parseISO = Parse the given string in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and return an instance of Date, the return value will look like this: Mon Jan 24 2022 00:00:00 GMT+0700 (Novosibirsk Standard Time)

format = Format the instace of Date into a string with certain pattern such as MMMM dd, yyyy
