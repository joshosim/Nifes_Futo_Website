import React from "react";
import FirstImage from "../assets/image.jpg";

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
    </div>
  );
};

export default About;
