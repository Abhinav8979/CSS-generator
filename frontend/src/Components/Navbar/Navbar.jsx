import React from "react";
import { GiAbstract037 } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full md:flex justify-center items-center bg-black text-white pt-5 hidden">
      <div className="max-w-[55%]  w-[55%] bg-[#1A1A1A] md:flex justify-between p-2 px-6 rounded-full">
        <div className="flex gap-2 md:items-center ">
          <GiAbstract037 />
          <h1>
            <Link
              to="/"
              style={{
                textShadow: "0px 0px 5px #FFFFFF",
              }}
            >
              CSS GENERATOR
            </Link>{" "}
          </h1>
        </div>
        <div className="flex gap-8">
          <Link
            style={{
              textShadow: "0px 0px 3px #FFFFFF",
            }}
          >
            Portfolio
          </Link>
          <Link
            to="/user/signup"
            style={{
              textShadow: "0px 0px 3px #FFFFFF",
            }}
          >
            Signup
          </Link>
          <Link
            to="/user/login"
            style={{
              textShadow: "0px 0px 3px #FFFFFF",
            }}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
