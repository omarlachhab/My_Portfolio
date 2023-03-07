"use client";
import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import RoundedButton from "./btn/RoundedButton";

function moveToUp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex h-auto w-full justify-center ">
      <RoundedButton onClick={scrollToTop}>
        <FaAngleDoubleUp size={25} className="text-gray-700" />
      </RoundedButton>
    </div>
  );
}

export default moveToUp;
