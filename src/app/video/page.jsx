import React from "react";

function page() {
  return (
    <>
    <h1 className="text-2xl font-bold  text-center mb-1 mt-10">Videoes </h1>
     < hr className="border-2 border-blue-500 w-[20%]  mx-auto mb-10"/>
    <div className="grid grid-flow-row px-56 py-20 gap-10">
      <div
        className="embed-responsive embed-responsive-21by9 rounded-lg relative w-full overflow-hidden"
        style={{ paddingTop: "42.857143%" }}
      >
        <iframe
          className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&origin=https%3A%2F%2Fmdbootstrap.com"
          allowFullScreen=""
          data-gtm-yt-inspected-2340190_699="true"
          id={240632615}
        />
      </div>

    </div>
    </>
  );
}

export default page;
