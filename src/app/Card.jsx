"use client";
import Link from "next/link";
import React from "react";

function Card({ blogs }) {
  return (
    <div className="grid md:grid-cols-3 gap-5 grid-rows-none ">
      {blogs &&
        Object.keys(blogs).map((item) => (
          <Link key={blogs[item]._id} href={`/Details/${blogs[item].slug}`}>
            <div className="relative hover:scale-105 flex hover:scale-y-105 shadow-md shadow-black/20 transition-all flex-col items-center hover:bg-black/10 border border-gray-200 rounded-lg  md:flex-row md:max-w-xl bg-gray-100 ">
              <img
                className="object-cover transition-all   w-full rounded-t-lg h-96 md:h-56 md:w-72 hover:md:w-96 md:rounded-none md:rounded-l-lg"
                src={`${blogs[item].imgurl}`}
              />
              <div className="flex flex-col w-64 justify-between p-2 overflow-hidden leading-normal ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {blogs[item].title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 pb-5">
                  {blogs[item].description}
                </p>
              </div>
              <p className="bottom-1 left-1 absolute bg-slate-900/60 w-fit p-1 text-white  rounded text-[0.9rem]">Posted By : {blogs[item].name}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Card;
