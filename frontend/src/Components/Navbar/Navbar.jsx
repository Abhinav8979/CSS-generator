import React from "react";
import { GiAbstract037 } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full md:flex justify-center items-center bg-black text-white pt-5 hidden">
      <div className="max-w-2/5  w-2/5 bg-[#1A1A1A] md:flex justify-between p-1 px-6 rounded-full">
        <div className="flex gap-2 md:items-center">
          <GiAbstract037 />
          <h1>
            <Link to="/">CSS GENERATOR</Link>{" "}
          </h1>
        </div>
        <div className="flex gap-8">
          <div className="border border-transparent px-3  p-1 rounded-3xl">
            <Link>Portfolio</Link>
          </div>
          <div className="border borde-white bg-green-600   hover:border-white  font-semibold px-4  p-1 rounded-3xl flex flex-col nav_ele_container overflow-hidden">
            <h1 className="transition-all duration-200 ease-in-out">Signup</h1>
            <Link to="/user/signup" className="link">
              Signup
            </Link>
          </div>
          <div className="border bg-red-600 border-white px-4  p-1 rounded-3xl nav_ele_container overflow-hidden font-semibold">
            <h1 className="transition-transform duration-300 ease-in-out">
              Login
            </h1>
            <Link to="/user/login" className="link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
