import React from "react";

type props = {
  icon: string;
  text: string;
};

function skills({ icon, text }: props) {
  return (
    <div className="flex w-52 items-center justify-evenly gap-3 rounded-md p-2 shadow-md hover:bg-gray-300">
      <img className="w-14 rounded-md" src={icon} alt="" />
      <h1 className="text-lg font-bold text-gray-600">{text}</h1>
    </div>
  );
}

export default skills;
