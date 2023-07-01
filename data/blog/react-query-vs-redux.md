---
title: State Management in React Applications - Choosing the Right Tool for Seamless Development
slug: react-query-vs-redux
cover: "/static/images/blogs/14.jpg"
blurUrl: "data:image/jpeg;base64,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"
description: Brief comparison between React Query and Redux as state management after using react-query for six months
date: "2023-07-01"
---

# Section 1: Introduction

State management plays a crucial role in React applications as it involves managing and synchronizing data across different components. As applications grow in complexity, the need for efficient state management becomes evident. Developers face the challenge of choosing the right tool that can handle state effectively, ensuring data consistency, performance, and maintainability. With various options available, such as Redux, React Query, MobX, and context API, developers must carefully consider factors like scalability, ease of use, developer experience, community support, and integration with other libraries. Selecting the appropriate state management tool is essential to maintain a well-organized and manageable codebase while providing a smooth and responsive user experience.

# Section 2: Challenges in State Management

*  React Query vs Redux: Simplifying State Management

When it comes to state management in React applications, developers often face the challenge of choosing the right tool. Redux has been a popular choice for many years, but React Query has emerged as a powerful alternative. One of the key differentiators between React Query and Redux lies in their approach to handling callbacks and loading states.

* Redux: Manual Callback Handling

Redux is a predictable state container that relies on a unidirectional data flow. While Redux provides a solid foundation for managing application state, it requires developers to write additional code to handle callbacks, loading states, and error handling.

When making an asynchronous request in Redux, developers typically dispatch an action that triggers an API call. They must manually handle the success and error cases in separate reducer functions. Additionally, they need to manage loading states by introducing additional state variables and dispatching loading actions.

This manual process of handling callbacks and loading states can be time-consuming and prone to error. Developers must write boilerplate code and ensure consistency across different parts of the application. This complexity can hinder productivity and increase the learning curve for new team members.

### Example

    import { useState, useEffect, useCallback, useRef } from "react";
    import { useSelector, useDispatch } from "react-redux";

    const useUser = () => {
      const [fetched, setFetched] = useState(false);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState("");

      const mounted = useRef();

      const userProfile = useSelector((state) => state.users.data);

      const {
        user: { getUser },
      } = useDispatch();

      // user's sid not yet fetched
      const isUserNotYetFetched = userProfile.length === 0;

      const fetchData = useCallback(async () => {
        if (mounted.current) {
          setLoading(true);
          setError("");
        }

        const onError = (message) => {
          if (mounted.current) setError(message);
        };

        await Promise.all([getUser({ onError })]);

        if (mounted.current) setLoading(false);
      }, [getUser]);

      const clearError = useCallback(() => setError(""), []);

      useEffect(() => {
        mounted.current = true;

        return () => {
          mounted.current = false;
        };
      }, []);

      useEffect(() => {
        // fetch data if USER not yet fetched
        if (isUserNotYetFetched && !fetched) {
          fetchData();

          if (mounted.current) setFetched(true);
        }
      }, [fetchData, isUserNotYetFetched, fetched]);

      return {
        loading,
        error,
        isUserNotYetFetched,
        userProfile,
        refetch: fetchData,
        clearError,
        setError,
      };
    };

    export default useUser;


* React Query: Simplified Callback Handling

React Query takes a different approach by simplifying the management of callbacks and loading states. It provides a built-in mechanism to handle common asynchronous scenarios through its `useQuery` and `useMutation` hooks.

When using React Query, developers can define an API endpoint or mutation and provide an asynchronous function as the request handler. React Query automatically handles loading states, error handling, and success scenarios without the need for manual intervention.

The `useQuery` hook automatically handles the loading state by providing an `isLoading` boolean flag. This flag indicates whether the query is in progress, eliminating the need to manage loading states manually.

React Query also simplifies error handling by providing an `onError` callback. Developers can specify a function that is called when an error occurs during the query. This allows for centralized error handling logic and promotes code reuse across different parts of the application.

Similarly, React Query provides an `onSuccess` callback that is triggered when the query is successful. This callback enables developers to update the UI or perform additional actions based on the query result.

By providing these built-in features, React Query significantly reduces boilerplate code and promotes a more streamlined development process. Developers can focus on writing the core logic of their application without worrying about handling callbacks and loading states manually.

### Example

    import { getAllUsers } from "api/user";
    import { AxiosError } from "axios";
    import { useEffect, useState } from "react";
    import { useMutation } from "react-query";

    const useUser = () => {
      const [data, setData] = useState([]);
      const [fetched, setFetched] = useState(false);

      const { mutate, isLoading } = useMutation(() => getAllUsers(), {
        onSuccess(data) {
          setData(data);
        },
        onError(err: AxiosError) {
          console.log(err);
        },
      });

      useEffect(() => {
        mutate();
        setFetched(true);
      }, [mutate]);

      return {
        userData: data,
        refethUserData: mutate,
        isLoading,
      };
    };

    export default useUser;

---
**NOTE**

Notice that redux require more lines which leads to more effort to be done.

---

* Additional Benefits of React Query

In addition to simplified callback handling, React Query offers several other benefits that make it a compelling choice for state management in React applications:

### Automatic Cache Management

React Query comes with a powerful caching system that automatically stores and manages the data returned from API calls. This caching mechanism helps optimize performance and reduces the need for redundant API requests. Developers can easily configure caching options and control how data is invalidated and refreshed.

### Real-Time Data Updates

React Query supports real-time data updates through its subscription system. Developers can subscribe to changes in the underlying data source and automatically update the UI when new data becomes available. This real-time functionality is particularly useful for applications that require live updates, such as chat applications or collaborative tools.

### Query Deduplication and Fetch Policy

React Query intelligently deduplicates identical queries, meaning that if multiple components request the same data simultaneously, React Query sends a single request to the server and shares the result across all components. This reduces network traffic and improves performance.

React Query also provides various fetch policies that developers can configure to control how data is fetched and cached. Options such as cache-first, network-first, cache-only, and more offer flexibility in optimizing data fetching strategies.

### Integration with React Ecosystem

React Query seamlessly integrates with the React ecosystem, making it a natural fit for React applications. It works well with React's component

# Section 3: Conclusion

So, after reading all of the explanation above, does that mean React Query is the new replacement for redux as state management and vice versa?
The answer is **NO**, here is why

it is clear that React Query and Redux serve different purposes.

React Query is a specialized library that primarily focuses on providing an API cache. It excels in this specific task and requires less code to implement. Its main strength lies in efficiently managing and caching API data.

On the other hand, Redux is a powerful state management library that offers a wide range of tools for managing various types of application state. It allows you to store and manage almost anything, but you need to write the logic yourself. With Redux, you have the flexibility to handle complex state management scenarios beyond just caching API data.

It is worth mentioning that you can actually use React Query and Redux together in your application. React Query can handle the API caching aspect, while the rest of your global state can be managed by Redux. This allows you to leverage the strengths of both libraries in different areas of your application.

Additionally, it's worth noting that Redux Toolkit, the official Redux package, introduced an API cache abstraction called RTK Query starting from version 1.6. RTK Query offers similar features to React Query but with some differences in concepts. If you're interested, it's worth exploring RTK Query as an alternative to React Query.

In summary, while React Query and Redux have overlapping functionalities, they serve different purposes. React Query specializes in API caching, while Redux provides a broader set of tools for managing application state. They can be used together, and you may also want to consider exploring RTK Query as an alternative to React Query.

---
**NOTE**

It is worth to mention that you can also use React Query as API cache while using react context as a simple state management, most of the time the scale of the app that you working on doesn't need Redux as the state management to begin with.

---

![Banner](/static/images/blogs/react-query/redux-overkill.png)
