import React, { useEffect, useState } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

export default function Comment() {
  const [loading, setLoading] = useState(false);

  const getFeedback = async (message: string) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await fetch("/api/chat-gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setLoading(false);
    console.log(data);
    return data.result.replaceAll("\n", "");
  };

  useEffect(() => {
    addResponseMessage(
      "Hi, My Name is Alfred, a Chat-GPT Artificial Intelegence personal assistant"
    );
  }, []);

  const handleNewUserMessage = async (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    const result = await getFeedback(newMessage);
    addResponseMessage(result);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      toggleMsgLoader
      profileAvatar="/static/images/alfred.png"
      title="Alfred AI"
      subtitle="Powered by Chat-GPT"
    />
  );
}
