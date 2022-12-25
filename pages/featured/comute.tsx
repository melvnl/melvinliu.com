import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

import cn from "classnames";
import styles from "styles/featured.module.css";

import Container from "@/components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className=" bg-primaryWhite dark:bg-darkBlack">
        <div id="first-section" className="flex">
          <div className="">
            <ul className="">
              <li className={styles.active}>01</li>
              <li className="transform transition duration-500 mb-2 font-bold cursor-pointer text-gray-300">
                02
              </li>
              <li className="mb-2 font-bold cursor-pointer text-gray-300">
                03
              </li>
              <li className="mb-2 font-bold cursor-pointer text-gray-300">
                04
              </li>
            </ul>
          </div>
          <div className="">
            <span>Comute</span>
            <h1>
              Realizing the accessibility of traveling by train for deaf friends
            </h1>
            <p>Make</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
