import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r rounded-lg from-teal-400 to-sky-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className=" text-2xl font-bold">
          Workout Buddy
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
