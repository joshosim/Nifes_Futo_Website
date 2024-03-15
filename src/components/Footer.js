import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let day = currentDate.getMonth() + 1;
  let date = currentDate.getDate();
  let dayAlph = "";

  switch (day) {
    case 1:
      dayAlph = "Jan";
      break;
    case 2:
      dayAlph = "Feb";
      break;
    case 3:
      dayAlph = "March";
      break;
    case 4:
      dayAlph = "April";
      break;
    case 5:
      dayAlph = "May";
      break;
    case 6:
      dayAlph = "June";
      break;
    case 7:
      dayAlph = "July";
      break;
    case 8:
      dayAlph = "Aug";
      break;
    case 9:
      dayAlph = "Sept";
      break;
    case 10:
      dayAlph = "Oct";
      break;
    case 11:
      dayAlph = "Nov";
      break;
    case 12:
      dayAlph = "Dec";
      break;
    default:
      dayAlph = "";
      break;
  }
  return (
    <div className="flex items-center justify-between my-24">
      <div className="flex flex-col justify-between items-center gap-5">
        <h1 className="font-bold text-xl">NIFES FUTO</h1>
        <p>&copy; {`${date} ${dayAlph}, ${currentYear}`}</p>
      </div>
      <div className="rounded-md h-5 w-5 p-5 bg-gray-200 grid place-content-center">
        <Link to="https://m.facebook.com/profile.php/?id=100071843581289">
          <FaFacebook />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
