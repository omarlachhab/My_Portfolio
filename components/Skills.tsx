import React from "react";

type props = {
  icon: string;
  text: string;
};

const skillsData: props[] = [
  { icon: "/icons/javascript.svg", text: "javascript" },
  { icon: "/icons/firebase.svg", text: "firebase" },
  { icon: "/icons/github.svg", text: "github" },
  { icon: "/icons/nextjs.svg", text: "nextjs" },
  { icon: "/icons/react.svg", text: "react" },
  { icon: "/icons/tailwindcss.svg", text: "tailwindcss" },
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
          {skillsData.map((skill) => {
            return (
              <div className="flex w-52 items-center justify-evenly gap-3 rounded-md p-2 shadow-md hover:bg-gray-300">
                <img className="w-14 rounded-md" src={skill.icon} alt="" />
                <h1 className="text-lg font-bold text-gray-600">
                  {skill.text}
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
