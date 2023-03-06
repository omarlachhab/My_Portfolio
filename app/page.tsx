import Navbar from "./components/navbar";
import RoundedLink from "./components/btn/roundedLink";
import RoundedButton from "./components/btn/roundedButton";
import Skills from "./components/skills";
import Project from "./components/projects";
import Contact from "./components/contact";
import { FaLinkedinIn, FaGithub, FaAngleDoubleUp } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { GoMail } from "react-icons/go";

import Link from "next/link";
import MoveToUp from "./components/moveToUp";

export default function Home() {
  return (
    <main className="h-full w-full pb-28 ">
      <Navbar />
      <div className="container mx-auto px-4 pt-16">
        <section className="flex flex-col items-center justify-center gap-5 px-4 pt-12 text-center text-gray-600 ">
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

        <section className="pt-16 text-gray-600">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-col items-center gap-4 lg:w-[150%] lg:items-start ">
              <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
                About
              </h1>
              <h2 className="text-3xl font-semibold">Who I Am</h2>
              <p>
                I specialize in building mobile responsive front-end UI
                applications that connect with API’s and other backend
                technologies. I’m passionate about learning new technologies and
                understand there is more than one way to accomplish a task.
                Though I am most proficient in building front-end applications
                using HTML, CSS, Javascript, and React, I am a quick learner and
                can pick up new tech stacks as needed. believe that being a
                great developer is not using one specific language, but choosing
                the best tool for the job.<br></br> I started web developement
                in 2013 managing multiple e-commerce websites on CMS platforms
                such as WordPress, BigCommerce, and Shopify. I have experience
                working directly with clients and taking mock wireframes all the
                way to deployed applications. In my spare time I run Code
                Commerce, a Youtube channel where I teach web developement and
                various front-end technologies.<br></br>
                <Link
                  className="text-lg underline decoration-sky-600"
                  href={`#`}
                >
                  Check out some of my latest projects.
                </Link>
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-6   md:grid-cols-3 lg:grid-cols-2">
              <img
                className="col-span-full h-60 w-full rounded-2xl object-cover  shadow-lg shadow-gray-600 md:col-auto md:h-40 lg:col-span-full"
                src="/images/about img 1.jpg"
                alt=""
              />
              <img
                className=" h-40 w-full rounded-2xl shadow-lg shadow-gray-600 "
                src="/images/about img 2.jpg"
                alt=""
              />
              <img
                className="h-40 w-full rounded-2xl shadow-lg shadow-gray-600 "
                src="/images/about img 3.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pt-16 text-gray-600">
          <div className="flex flex-col items-center justify-between gap-6 md:items-start">
            <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
              Skills
            </h1>
            <h2 className="text-3xl font-semibold ">What I Can Do</h2>
            <div className="flex flex-wrap   justify-center gap-7 md:justify-start ">
              <Skills icon="/icons/javascript.svg" text="Javascript" />
              <Skills icon="/icons/firebase.svg" text="Firebase" />
              <Skills icon="/icons/github.svg" text="Github" />
              <Skills icon="/icons/nextjs.svg" text="Nextjs" />
              <Skills icon="/icons/react.svg" text="React" />
              <Skills icon="/icons/tailwindcss.svg" text="Tailwindcss" />
            </div>
          </div>
        </section>

        <section className="pt-16 pb-14 text-gray-600">
          <div className="flex  w-full flex-col items-center justify-between gap-6 lg:items-start">
            <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
              Projects
            </h1>
            <h2 className="text-3xl font-semibold ">What I've Built</h2>
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <Project />
              <Project />
            </div>
          </div>
        </section>

        <section className="pt-16 pb-14 text-gray-600">
          <div className="flex  w-full flex-col items-center justify-between gap-6 lg:items-start">
            <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
              Contact
            </h1>
            <h2 className="text-3xl font-semibold ">Get In Touch</h2>
            <Contact />
          </div>
        </section>

        <MoveToUp />
      </div>
    </main>
  );
}
