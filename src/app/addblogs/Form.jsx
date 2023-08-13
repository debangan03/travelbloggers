"use client";
import React from "react";
import { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [imgurl, setimgurl] = useState("");
  const [description, setdescription] = useState("");
  const [title, settitle] = useState("");
  const [slug, setslug] = useState("");

  const handelsubmit = async () => {
    console.log();

    const res = await fetch("/api/addblogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        title: title,
        description: description,
        imgurl: imgurl,
        slug: slug,
      }),
    });
    const data = await res.json();
    if (data.success) {
      window.location.assign('http://localhost:3000');
    }
    setdescription("");
    setimgurl("");
    setname("");
    settitle("");
    setslug("");
  };

  return (
    <div className="min-h-screen md:p-20 mt-10">
      <div className="heading">
        <h1 className="text-2xl text-black font-bold text-center">Add Blogs</h1>
        <hr className="w-[10vw] border-indigo-500 border-2 mx-auto" />
      </div>
      <div className="md:w-[40vw] w-full p-4 mx-auto">
        <form className="bg-white shadow-lg border-b-[1px] border-r-[1px]  border-slate-300 shadow-slate-300 rounded px-3 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Your name
            </label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="shadow border-indigo-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Blog Title
            </label>
            <input
              onChange={(e) => {
                settitle(e.target.value);
                setslug(
                  e.target.value.split(" ").join("") +
                    (Math.random() * Date.now()).toString()
                );
              }}
              value={title}
              className="shadow appearance-none border border-indigo-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="enter your blog title"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="url"
            >
              Blog Image Url
            </label>
            <input
              value={imgurl}
              onChange={(e) => setimgurl(e.target.value)}
              className="shadow appearance-none border border-indigo-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="enter your blog image url"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Blog Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="shadow appearance-none border border-indigo-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="enter your blog description"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-500 mx-auto hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handelsubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
