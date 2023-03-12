import Navbar from "../components/NavBar";
import RoundedLink from "../components/btn/RoundedLink";
import Skills from "../components/Skills";
import Project from "../components/Projects";
import Contact from "../components/Contact";
import { FaLinkedinIn, FaGithub, FaAngleDoubleUp } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { GoMail } from "react-icons/go";

import Link from "next/link";
import MoveToUp from "../components/MoveToUp";
import About from "@/components/About";
import TopSection from "@/components/TopSection";

export default function Home() {
  return (
    <main className="h-full w-full  pb-28">
      <Navbar />
      <div className="container mx-auto px-4 pt-16">
        <TopSection />
        <About />
        <Skills />
        <Project />
        <Contact />
        <MoveToUp />
      </div>
    </main>
  );
}
