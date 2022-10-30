import { useState, useEffect } from "react";

export const useLocalTime = () => {
  const [currTime, setCurrTime] = useState(
    new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      })
    )
  );

  useEffect(() => {
    const date = new Date(
      new Date().toLocaleString("en-US", {
        timeZone: "Asia/Jakarta",
      })
    );

    const timer = setTimeout(() => {
      setCurrTime(date);
    }, 1000);
    return () => {
      timer;
    };
  }, [currTime]);

  return {
    currTime,
    currTimeInHour: currTime.getHours(),
  };
};
