import React from "react";
import { Link } from "react-router-dom";

//import'./style.css';

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav className="h-20 bg-red-300 w-screen px-4 py-2">
        <div className="bg-green-300 flex w-full h-full justify-start items-center">
          <div className="bg-blue-300 flex justify-start items-center leading-none">
            <Link className="text-5xl cursor-pointer" to="/">
              Logo
            </Link>
          </div>
          <div className="bg-yellow-300 flex justify-end items-center leading-none w-full">
            <div className="p-4">
              <Link
                className="py-3 px-5 bg-yellow-300 rounded-xl text-xl hover:bg-yellow-500 transition duration-300 ease-in-out flex items-center"
                to="/home"
              >
                Home
              </Link>
            </div>
            <div className="p-4">
              <Link
                className="py-3 px-5 bg-yellow-300 rounded-xl text-xl hover:bg-yellow-500 transition duration-300 ease-in-out flex items-center"
                to="/events"
              >
                Events
              </Link>
            </div>
            <div className="p-4">
              <Link
                className="py-3 px-5 bg-yellow-300 rounded-xl text-xl hover:bg-yellow-500 transition duration-300 ease-in-out flex items-center"
                to="/gallery"
              >
                Gallery
              </Link>
            </div>
            <div className="p-4">
              <Link
                className="py-3 px-5 bg-yellow-300 rounded-xl text-xl hover:bg-yellow-500 transition duration-300 ease-in-out flex items-center"
                to="/members"
              >
                Members
              </Link>
            </div>
            <div className="p-4">
              <Link
                className="py-3 px-5 bg-black text-yellow-300 border-2 border-black rounded-full text-xl hover:bg-yellow-300 hover:text-black transition duration-300 ease-in-out flex items-center"
                to="/members"
              >
                Sign IN
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
