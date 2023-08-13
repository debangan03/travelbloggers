import React from "react";

function Loading() {
  return (
    <div className="min-h-screen my-36">
      <div className="min-h-[15rem] flex flex-col bg-white  rounded-xl   ">
        <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
          <div className="flex justify-center space-x-2">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full"
              role="status"
              aria-label="loading"
            >
              
            </div>
            <span className="">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
