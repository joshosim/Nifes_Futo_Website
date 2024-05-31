import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <ul className="flex items-center gap-5 py-5 font-bold mb-20">
        <Link to="/">NIFES FUTO</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
