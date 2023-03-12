import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { GrDocumentUser } from "react-icons/gr";
import RoundedLink from "./btn/RoundedLink";

function TopSection() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-5 px-4 pt-12 text-center text-gray-600 "
    >
      <p>LET'S BUILD SOMETHING TOGETHER</p>
      <div className="flex text-3xl font-bold lg:text-5xl">
        <h1 className="text-gray-700">Hi, I'm </h1>
        <span className="pl-2  text-indigo-600">Omar Lachhab</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-700 lg:text-5xl">
        A Full Stack And Game Developer
      </h1>
      <p>
        I’m focused on building responsive front-end web applications
        integrating back-end technologies.
      </p>
      <div className="flex gap-7">
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
    </section>
  );
}

export default TopSection;
