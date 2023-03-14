import React from "react";
import Image from "next/image";

type props = {
  icon: string;
  name: string;
};

const skillsData: props[] = [
  { icon: "/icons/javascript.svg", name: "javascript" },
  { icon: "/icons/firebase.svg", name: "firebase" },
  { icon: "/icons/github.svg", name: "github" },
  { icon: "/icons/nextjs.svg", name: "nextjs" },
  { icon: "/icons/react.svg", name: "react" },
  { icon: "/icons/tailwindcss.svg", name: "tailwindcss" },
];

function skills() {
  return (
    <section className="pt-16 text-gray-600">
      <div className="flex flex-col items-center justify-between gap-6 md:items-start">
        <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
          Skills
        </h1>
        <h2 className="text-3xl font-semibold ">What I Can Do</h2>
        <div className="flex flex-wrap justify-center gap-7 md:justify-start ">
          {skillsData.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex w-52 items-center justify-evenly gap-3 rounded-md p-2 shadow-md hover:bg-gray-300"
              >
                <Image
                  width="1"
                  height="1"
                  className="w-14 rounded-md"
                  src={skill.icon}
                  alt={skill.name}
                />
                <h1 className="text-lg font-bold text-gray-600">
                  {skill.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default skills;
