import React from "react";
import FirstImage from "../assets/image.jpg";
import SecondImage from "../assets/morgan.jpg";
import ThirdImage from "../assets/perfect.jpg";
import FourthImage from "../assets/godly.jpg";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <h1 className="font-bold text-7xl">Peculiar People on Campus</h1>
          <p className="my-3 text-xl">
            We are a movement of Christ like students in Nigeria Tertiary
            institutions transforming the campus and society upon graduation.
          </p>
          <form action="">
            <input
              type="text"
              placeholder="First name"
              className="rounded-md w-full bg-gray-200 py-2.5 px-2 placeholder:font-semibold mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-md w-full bg-gray-200 py-2.5 px-2 placeholder:font-semibold  mb-3"
            />
            <button className="bg-[#80F] py-2 px-3 rounded-md text-white font-semibold">
              Submit
            </button>
          </form>
        </div>
        <div className="bg-gray-200 grid place-content-center">
          <img src={FirstImage} alt="/" className="" />
        </div>
      </div>
      <div className="mt-32">
        <h2 className="font-bold text-3xl ">Gallery</h2>
        <div className="flex gap-5 overflow-x-scroll my-5">
          <img
            src={SecondImage}
            alt="/"
            className="object-cover object-center  w-[350px] rounded-t-md rounded-r-md rounded-b-md rounded-br-md"
          />
          <img
            src={ThirdImage}
            alt="/"
            className="object-cover object-center  w-[350px] rounded-t-md rounded-r-md rounded-b-md rounded-br-md"
          />
          <img
            src={FourthImage}
            alt="/"
            className="object-cover object-center  w-[350px] rounded-t-md rounded-r-md rounded-b-md rounded-br-md"
          />
          <img src="" alt="/" />
        </div>
      </div>
      <div className="mt-32">
        <h2 className="text-center font-bold text-3xl mb-5">About NIFES</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex justify-center items-center flex-col">
            <img
              src={FourthImage}
              alt="/"
              className="rounded-full object-cover object-center h-[150px] w-[150px] my-3"
            />
            <p className="font-bold">Evangelism</p>
            <p className="text-[.8rem] text-center">
              Communicating the gospel of Christ to the non-Christians on campus
              is key to the transformation of the campus and the changing of
              lives.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              src={SecondImage}
              alt="/"
              className="rounded-full object-cover object-center h-[150px] w-[150px] my-3"
            />
            <p className="font-bold">Discipleship</p>
            <p className="text-[.8rem] text-center">
              Discipleship is the act of making someone becoming more like
              his/her master. In our case, we seek to make them become more like
              Christ.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              src={ThirdImage}
              alt="/"
              className="rounded-full object-cover object-center h-[150px] w-[150px] my-3"
            />
            <p className="font-bold">Bible study</p>
            <p className="text-[.8rem] text-center">
              NIFES promotes the teachings of the Bibles above all other
              teachings as advocated by Apostle Paul, who gives us an
              all-important call to heed God’s Word. The call to scrutinize,
              understand, and then apply Scripture.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              src={FirstImage}
              alt="/"
              className="rounded-full object-cover object-center h-[150px] w-[150px] my-3"
            />
            <p className="font-bold">Prayer meeting</p>
            <p className="text-[.8rem] text-center">
              In NIFES we value our shared and private times of prayers because
              we believe in prayer as the primary way through which we change
              our lives and that of the students amongst whom we work on campus.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center my-28">
        <div>
          <h1 className="font-bold text-3xl">Join us in Bible Study</h1>
          <p>
            Bible study is a time when we come together to study and grow in
            God's word.
          </p>
        </div>
        <div>
          <video className="h-[250px] w-[450px] bg-black rounded-md gap-5"></video>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-28">
        <h2 className="font-bold text-3xl lg:col-span-1">FAQs</h2>
        <div className="lg:col-span-2">
          <div className="w-full flex justify-between items-center rounded-md border border-gray-200 p-4 mb-2.5">
            <p className="font-semibold">
              NIFES is affiliated to which church?
            </p>
            <FaPlus size={15} />
          </div>
          <div className="w-full flex justify-between items-center rounded-md border border-gray-200 p-4 mb-2.5">
            <p className="font-semibold">What are NIFES cardinal programs</p>
            <FaPlus size={15} />
          </div>
          <div className="w-full flex justify-between items-center rounded-md border border-gray-200 p-4 mb-2.5">
            <p className="font-semibold">What is NFC</p>
            <FaPlus size={15} />
          </div>
          <div className="w-full flex justify-between items-center rounded-md border border-gray-200 p-4 mb-2.5">
            <p className="font-semibold">Wings in NIFES</p>
            <FaPlus size={15} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-28">
        <div className="my-auto">
          <h1 className="font-bold text-3xl"> Get Started</h1>
          <p>Connect with us and let's learn</p>
          <div className="flex justify-between items-center  bg-gray-200 rounded-md w-full my-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none bg-gray-200 py-4 px-2 placeholder:font-semibold rounded-tl-md rounded-bl-md"
            />
            <button className="bg-[#80F] py-2 px-3 mr-2.5 rounded-md text-white font-semibold">
              Submit
            </button>
          </div>
        </div>
        <div>
          <img src={ThirdImage} alt="/" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
