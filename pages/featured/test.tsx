import React from "react";
import cn from "classnames";
import styles from "styles/featured.module.css";

import { useState } from "react";

export default function Bukalapak() {
  const [active, isActive] = useState(false);
  return (
    <div className=" bg-black w-full h-screen pt-10 ">
      <ul className="ml-4">
        <li
          className={cn(
            !active
              ? styles.active
              : " transform transition duration-500 mb-2 font-bold cursor-pointer"
          )}
        >
          01
        </li>
        <li
          onClick={() => isActive(true)}
          className={cn(
            active
              ? styles.active
              : " transform transition duration-500 mb-2 font-bold cursor-pointer text-gray-300"
          )}
        >
          02
        </li>
        <li className="mb-2 font-bold cursor-pointer text-gray-300">03</li>
        <li className="mb-2 font-bold cursor-pointer text-gray-300">04</li>
      </ul>
    </div>
  );
}
