"use client";
import Link from "next/link";
import React from "react";
import {AiOutlineFolderAdd} from  'react-icons/ai'


function Navbar() {
  return (
    <header className="text-gray-700 body-font z-30 bg-white shadow-md shadow-slate-300 sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">TravelBloggers</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-gray-900 hover:font-semibold">
            Home
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-gray-900 hover:font-semibold">
            About
          </Link>
          <Link href={"/video"} className="mr-5 hover:text-gray-900 hover:font-semibold">
            Videoes
          </Link>
        </nav>
        <div className=" flex items-center justify-center">
          <div className="relative  flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 block w-[80%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-slate-900 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none  "
              placeholder="Search"
             
            />

            <Link href={"/"}>
              <span
                className="input-group-text hover:text-teal-600 flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-slate-900 "
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  
                  className="h-5 w-5"
                >
                  <path
                   
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    
                  />
                </svg>
              </span>
            </Link>
          </div>
          <Link href={'/addblogs'}>
        
          <AiOutlineFolderAdd className="text-3xl font-semibold text-indigo-700 cursor-pointer hover:text-green-500"/>
          </Link>
        </div>
     
      </div>
    </header>
  );
}

export default Navbar;
