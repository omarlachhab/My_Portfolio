"use client";
import React, { MouseEventHandler, useState } from "react";
import RoundedLink from "./btn/RoundedLink";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrDocumentUser } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import Image from "next/image";

function contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const dataPost = {
      name: name,
      phone: phone,
      email: email,
      subject: subject,
      message: message,
      api_key: process.env.API_KEY || "123456",
    };

    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        body: JSON.stringify(dataPost),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        console.log("Result :----> " + response.status);
      }
    } catch (err: any) {
      console.log("Catch :----> ");
    }
  };

  return (
    <section className="pt-16 pb-14 text-gray-600">
      <div className="flex  w-full flex-col items-center justify-between gap-6 lg:items-start">
        <h1 className="text-2xl font-medium uppercase text-indigo-600 ">
          Contact
        </h1>
        <h2 className="text-3xl font-semibold ">Get In Touch</h2>
        <div className="flex h-auto w-full flex-col justify-center gap-6 p-2 lg:flex-row lg:justify-start ">
          <div className="flex w-full flex-col items-center gap-1 rounded-md p-4 shadow-lg">
            <Image
              width="200"
              height="200"
              alt=""
              src="/images/omarlachhab.jpg"
              className="h-60 w-60 rounded-full object-cover shadow-lg"
            />

            <h1 className="pt-4 text-2xl font-bold">OMAR LACHHAB</h1>
            <h2 className="">A Full Stack And Game Developer</h2>
            <p className="pt-2">
              I am available for freelance or full-time positions. Contact me
              and let's talk.
            </p>
            <p className="pt-6">CONNECT WITH ME</p>
            <div className=" flex gap-7 pt-2 pb-2">
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

          <div className="flex h-auto w-full flex-col gap-3 rounded-md p-4 shadow-lg">
            <div className="flex h-auto w-full flex-col gap-3 lg:flex-row">
              <div className="flex w-full flex-col gap-1">
                <label className="uppercase text-gray-600">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 w-full rounded-md  border-2 border-gray-300 px-3"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="flex w-full flex-col gap-1">
                <label className="uppercase text-gray-600">Phone number</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  className="h-12 w-full rounded-md  border-2 border-gray-300 px-3"
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="uppercase text-gray-600">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-md  border-2 border-gray-300 px-3"
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="uppercase text-gray-600">Subject</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                className="h-12 w-full rounded-md  border-2 border-gray-300 px-3"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="uppercase text-gray-600">Message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="h-32 w-full rounded-md  border-2 border-gray-300 px-3"
                name="Message"
                placeholder="Message"
              ></textarea>
            </div>
            <button
              onClick={(event: any) => handleSubmit(event)}
              className="my-4 h-16 w-full rounded-xl bg-gradient-to-tr from-indigo-700 to-cyan-500 uppercase text-white "
              value="Send Message"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
