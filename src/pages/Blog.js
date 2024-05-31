import React from "react";
import bg from "../assets/pexels-brettjordan-10828123.jpg";
import godly from "../assets/godly.jpg";
import { FaEye, FaCalendarDays } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="grid place-content-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-auto w-full sm:w-[350px] rounded-lg bg-[#192224]">
          <img
            src={bg}
            alt="img"
            className="w-full rounded-t-lg rounded-br-3xl"
          />
          <div className=" p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <img
                  src={godly}
                  alt="profile"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <h1>Osim Uka</h1>
              </div>
              <div className="flex items-center justify-center gap-1">
                <FaCalendarDays />
                <p>14/08/2024</p>
              </div>
            </div>
            <h1 className="font-bold text-2xl my-2 text-center">
              Theme Exposition
            </h1>
            <p className="font-semibold text-justify text-base">
              Trusting God is like letting go of the wheel during a bumpy ride.
              It's scary at first, but He promises to be your driver. It means
              believing He has a plan, even when you can't .....
            </p>
            <button className="font-bold bg-white text-black px-7 py-2 rounded-xl my-3 mx-auto">
              Read More
            </button>
            <div id="views" className="flex items-center justify-start gap-1">
              <FaEye />
              <p>30</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full sm:w-[350px] rounded-lg bg-[#192224]">
          <img
            src={bg}
            alt="img"
            className="w-full rounded-t-lg rounded-br-3xl"
          />
          <div className=" p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <img
                  src={godly}
                  alt="profile"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <h1>Osim Uka</h1>
              </div>
              <div className="flex items-center justify-center gap-1">
                <FaCalendarDays />
                <p>14/08/2024</p>
              </div>
            </div>
            <h1 className="font-bold text-2xl my-2 text-center">
              Theme Exposition
            </h1>
            <p className="font-semibold text-justify text-base">
              Trusting God is like letting go of the wheel during a bumpy ride.
              It's scary at first, but He promises to be your driver. It means
              believing He has a plan, even when you can't .....
            </p>
            <button className="font-bold bg-white text-black px-7 py-2 rounded-xl my-3 mx-auto">
              Read More
            </button>
            <div id="views" className="flex items-center justify-start gap-1">
              <FaEye />
              <p>30</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full sm:w-[350px] rounded-lg bg-[#192224]">
          <img
            src={bg}
            alt="img"
            className="w-full rounded-t-lg rounded-br-3xl"
          />
          <div className=" p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <img
                  src={godly}
                  alt="profile"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <h1>Osim Uka</h1>
              </div>
              <div className="flex items-center justify-center gap-1">
                <FaCalendarDays />
                <p>14/08/2024</p>
              </div>
            </div>
            <h1 className="font-bold text-2xl my-2 text-center">
              Theme Exposition
            </h1>
            <p className="font-semibold text-justify text-base">
              Trusting God is like letting go of the wheel during a bumpy ride.
              It's scary at first, but He promises to be your driver. It means
              believing He has a plan, even when you can't .....
            </p>
            <button className="font-bold bg-white text-black px-7 py-2 rounded-xl my-3 mx-auto">
              Read More
            </button>
            <div id="views" className="flex items-center justify-start gap-1">
              <FaEye />
              <p>30</p>
            </div>
          </div>
        </div>
        <div className="h-auto w-full sm:w-[350px] rounded-lg bg-[#192224]">
          <img
            src={bg}
            alt="img"
            className="w-full rounded-t-lg rounded-br-3xl"
          />
          <div className=" p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <img
                  src={godly}
                  alt="profile"
                  className="rounded-full h-12 w-12 object-cover"
                />
                <h1>Osim Uka</h1>
              </div>
              <div className="flex items-center justify-center gap-1">
                <FaCalendarDays />
                <p>14/08/2024</p>
              </div>
            </div>
            <h1 className="font-bold text-2xl my-2 text-center">
              Theme Exposition
            </h1>
            <p className="font-semibold text-justify text-base">
              Trusting God is like letting go of the wheel during a bumpy ride.
              It's scary at first, but He promises to be your driver. It means
              believing He has a plan, even when you can't .....
            </p>
            <button className="font-bold bg-white text-black px-7 py-2 rounded-xl my-3 mx-auto">
              Read More
            </button>
            <div id="views" className="flex items-center justify-start gap-1">
              <FaEye />
              <p>30</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
