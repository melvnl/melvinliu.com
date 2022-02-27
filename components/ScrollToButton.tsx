import React from "react";
import { scrollTo } from "@/lib/scrollTo";

const ScrollToButton = ({ toId, duration, children }: any) => {
  const handleClick = () => scrollTo({ id: toId, duration });

  return (
    <button onClick={handleClick} className=" flex mx-auto">
      {children}
    </button>
  );
};

export default ScrollToButton;
