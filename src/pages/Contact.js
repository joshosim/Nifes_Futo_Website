import React from "react";
import GodlyImage from "../assets/godly.jpg";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl mb-5">Contact</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={GodlyImage}
            alt="/"
            className="object-cover object-center h-[600px] rounded-t-md rounded-r-md rounded-b-md rounded-br-md"
          />
        </div>
        <div>
          <p className="mb-5">We can't wait to know and meet you!</p>
          <form action="">
            <input
              type="text"
              placeholder="First name"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold mb-3"
            />
            <input
              type="text"
              placeholder="Last name"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold mb-3"
            />
            <input
              type="text"
              placeholder="Email"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold  mb-3"
            />
            <input
              type="text"
              placeholder="Phone"
              className="rounded-md w-full bg-gray-200 py-3 px-2 placeholder:font-semibold  mb-3"
            />
            <button className="bg-[#80F] py-2 px-3 rounded-md text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
