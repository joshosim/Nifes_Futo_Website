import React from "react";
import FirstImage from "../assets/image.jpg";
import SecondImage from "../assets/morgan.jpg";
import ThirdImage from "../assets/perfect.jpg";
import FourthImage from "../assets/godly.jpg";

const About = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl mb-5">About</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img
            src={FirstImage}
            alt="/"
            className="object-cover object-center rounded-md"
          />
        </div>
        <div>
          <p className="text-xl">
            The Nigeria Fellowship of Evangelical Students (NIFES) is an
            interdenominational Christian campus movement in Nigeria whose aims
            are to promote and encourage evangelism, discipleship and mission
            among students.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-20">
        <h2 className="font-bold text-3xl lg:col-span-1">Our Dream</h2>
        <div className="lg:col-span-2">
          <p>
            A NIFES with students who are willing to be with Jesus and to become
            like Him. Students who own NIFES and are ready to give their all to
            see to the actualization of its Vision in their lives and campuses.
            Students who are teachable and responsible to the NIFES structure
            and creative in the actualization of NIFES Vision. Students with
            strong evangelical conviction and a passion for excellence through
            righteousness in their academics. Students who are agents of
            transformation sent to the Seven Spheres of Influence (Society), to
            impact them with godly values upon graduation.
          </p>
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
    </div>
  );
};

export default About;
