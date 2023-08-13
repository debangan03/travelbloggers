import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-slate-50   shadow-md shadow-black">
        <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="  text-xl whitespace-nowrap  hover:font-semibold">
              TravelBloggers
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
              <li>
                <a href="/" className="mr-4 hover:font-semibold md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="mr-4 hover:font-semibold md:mr-6">
                  Privacy Policy
                </a>
              </li>
              
              <li>
                <a href="/" className="hover:font-semibold">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:font-semibold">
            TravelBloggers™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
