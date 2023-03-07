import React from "react";

function projects() {
  return (
    <div className="group relative  text-white">
      <img
        className=" w-full rounded-2xl object-cover "
        src="images/about img 1.jpg"
        alt=""
      />
      <div className="absolute inset-0  h-full w-full rounded-2xl bg-gradient-to-r from-cyan-600   to-blue-500 opacity-0 group-hover:opacity-70"></div>
      <div className="absolute inset-0  flex h-full w-full flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 ">
        <h1 className="text-2xl font-bold">Netflix Clone</h1>
        <h2 className="text-white">NextJs</h2>
        <button className="rounded-md bg-white px-7 py-2 font-bold text-black">
          More info
        </button>
      </div>
    </div>
  );
}

export default projects;
