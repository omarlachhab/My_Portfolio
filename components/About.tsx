import Link from "next/link";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <section id="about" className="pt-16 text-gray-600">
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <div className="flex flex-col items-center gap-4 lg:w-[150%] lg:items-start ">
          <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
            About
          </h1>
          <h2 className="text-3xl font-semibold">Who I Am</h2>
          <p>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.<br></br>{" "}
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.<br></br>
            <Link className="text-lg underline decoration-sky-600" href={`#`}>
              Check out some of my latest projects.
            </Link>
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-6   md:grid-cols-3 lg:grid-cols-2">
          <Image
            style={{ objectFit: "cover" }}
            width="200"
            height="200"
            className="col-span-full h-60 w-full rounded-2xl object-cover  shadow-lg shadow-gray-600 md:col-auto md:h-40 lg:col-span-full"
            src="/images/about img 1.jpg"
            alt=""
          />
          <Image
            style={{ objectFit: "cover" }}
            width="200"
            height="200"
            className=" h-40 w-full rounded-2xl shadow-lg shadow-gray-600"
            src="/images/about img 2.jpg"
            alt=""
          />
          <Image
            style={{ objectFit: "cover" }}
            width="100"
            height="100"
            className="h-40 w-full rounded-2xl shadow-lg shadow-gray-600"
            src="/images/about img 3.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default About;
