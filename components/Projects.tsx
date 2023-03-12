import Link from "next/link";
import Image from "next/image";
import React from "react";

type ProjectType = {
  title: string;
  img: string;
  codeUsed: string;
  link: string;
};
const projectsData: ProjectType[] = [
  {
    title: "Netflix Clone",
    img: "/images/about img 1.jpg",
    codeUsed: "NextJs",
    link: "#",
  },
  {
    title: "Google Clone",
    img: "/images/about img 2.jpg",
    codeUsed: "ReactJS",
    link: "#",
  },
  {
    title: "Facebook Clone",
    img: "/images/about img 3.jpg",
    codeUsed: "ReactJS",
    link: "#",
  },
];

function projects() {
  return (
    <section className=" pt-16 pb-14 text-gray-600">
      <div className="flex  w-full flex-col items-center justify-between gap-6 lg:items-start">
        <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
          Projects
        </h1>
        <h2 className="text-3xl font-semibold ">What I've Built</h2>
        <div className=" grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {/* */}
          {projectsData.map((project) => {
            return (
              <div className="group relative  text-white">
                <Image
                  width="100"
                  height="100"
                  className=" h-full w-full rounded-2xl object-cover "
                  src={project.img}
                  alt=""
                />
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-500 opacity-0 transition-opacity duration-200 ease-in group-hover:opacity-70"></div>
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 ">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <h2 className="text-white">{project.codeUsed}</h2>
                  <Link
                    className="rounded-md bg-white px-7 py-2 font-bold text-black"
                    href={project.link}
                  >
                    More info
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default projects;
