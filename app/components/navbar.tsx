"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { GrDocumentUser } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import RoundedLink from "./btn/roundedLink";
import RoundedButton from "./btn/roundedButton";

function navbar() {
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.pageYOffset);
    });
  }, []);
  return (
    <div className="">
      {/*Mobile*/}
      <div
        className={`${
          toggleNavBar ? "ranslate-y-[0] " : "translate-y-[-100%]"
        } absolute top-0 z-[100] h-full w-full bg-black  opacity-30`}
      ></div>
      <nav
        className={`${
          toggleNavBar ? "ranslate-y-[0] " : "translate-y-[-100%]"
        } absolute top-0 z-[100]  flex h-full w-full max-w-lg flex-col bg-[#ecf0f3] p-8  shadow-lg duration-300 ease-in-out`}
      >
        {/*Head NavBar*/}
        <div className="flex flex-col gap-4">
          <div className="flex h-20 w-full  items-center justify-between">
            <p className="text-xl font-bold uppercase">OMAR LACHHAB</p>

            <RoundedButton onClick={() => setToggleNavBar(false)}>
              <IoCloseOutline size={25} />
            </RoundedButton>
          </div>
          <div className="h-0.5 w-full bg-gray-300"></div>
        </div>

        {/*Link NavBar*/}
        <div className="mt-10 w-full basis-2/4">
          <ul className="uppercase">
            <li className="pt-2 pb-2 text-lg font-thin">
              <Link href={"#"}> Home</Link>
            </li>
            <li className="pt-2 pb-2 text-lg font-thin">
              <Link href={"#"}> About</Link>
            </li>
            <li className="pt-2 pb-2 text-lg font-thin">
              <Link href={"#"}> Skills</Link>
            </li>
            <li className="pt-2 pb-2 text-lg font-thin">
              <Link href={"#"}> Projects</Link>
            </li>
            <li className="pt-2 pb-2 text-lg font-thin">
              <Link href={"#"}> Resume</Link>
            </li>
            <li className="pt-2 pb-2 text-lg font-thin">
              <Link href={"#"}> Contact</Link>
            </li>
          </ul>
        </div>
        {/*Footer NavBar*/}
        <div className="mt-auto h-52 w-full">
          <h1>LET'S CONNECT</h1>
          <div className="flex justify-start gap-10 pt-5">
            <RoundedLink url="#">
              <FaLinkedinIn size={20} />
            </RoundedLink>

            <RoundedLink url="#">
              <FaGithub size={20} />
            </RoundedLink>

            <RoundedLink url="#">
              <GoMail size={20} />
            </RoundedLink>

            <RoundedLink url="#">
              <GrDocumentUser size={20} />
            </RoundedLink>
          </div>
        </div>
      </nav>
      {/* Web */}
      <nav
        className={`fixed  h-16 w-full bg-[#ecf0f3]  ${
          scrollPosition && "shadow-md"
        }    md:px-4`}
      >
        <div className="flex h-full w-full items-center justify-between">
          <h2 className="hidden text-xl font-bold uppercase md:flex">
            omar lachhab
          </h2>
          <ul className="hidden  flex-row items-center justify-evenly gap-8 uppercase  md:flex">
            <li className="pt-2 pb-2 font-mono text-base text-gray-500">
              <Link href={"#"}> Home</Link>
            </li>
            <li className="pt-2 pb-2 font-mono text-base text-gray-500">
              <Link href={"#"}> About</Link>
            </li>
            <li className="pt-2 pb-2 font-mono text-base text-gray-500">
              <Link href={"#"}> Skills</Link>
            </li>
            <li className="pt-2 pb-2 font-mono text-base text-gray-500">
              <Link href={"#"}> Projects</Link>
            </li>
            <li className="pt-2 pb-2 font-mono text-base text-gray-500">
              <Link href={"#"}> Resume</Link>
            </li>
            <li className="pt-2 pb-2 font-mono text-base text-gray-500">
              <Link href={"#"}> Contact</Link>
            </li>
          </ul>
          <ul className="flex w-full  items-center justify-between px-6 md:hidden">
            <h2 className=" text-xl font-bold uppercase">omar lachhab</h2>
            <li className="pt-2 pb-2 text-lg font-thin ">
              <RoundedButton onClick={() => setToggleNavBar(true)}>
                <HiMenu size={20} />
              </RoundedButton>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
