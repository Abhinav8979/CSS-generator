import React, { useEffect, useRef } from "react";
import { GiAbstract037 } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const parentref = useRef();
  const ref = useRef();
  const portref = useRef();
  const signupref = useRef();
  const loginref = useRef();

  const handlenavbarenter = (e, index) => {
    let left;
    let width;

    const parentwidth = parentref.current.getBoundingClientRect().width;
    const parentleft = parentref.current.getBoundingClientRect().x;

    if (index == 0) {
      left = portref.current.getBoundingClientRect().x;
      width = portref.current.getBoundingClientRect().width;
    } else if (index == 1) {
      left = signupref.current.getBoundingClientRect().x;
      width = signupref.current.getBoundingClientRect().width;
    } else {
      left = loginref.current.getBoundingClientRect().x;
      width = loginref.current.getBoundingClientRect().width;
    }

    console.log(left - parentleft);

    ref.current.style.opacity = 1;
    ref.current.style.transform = `translateX(${left - parentleft + 30}px`;
    ref.current.style.width = width + "px";
  };

  const handlenavbarleave = (e) => {
    ref.current.style.opacity = 0;
  };

  return (
    <nav className="w-full md:flex  justify-center items-center bg-black text-white pt-5 hidden">
      <div className="bg-[#1A1A1A] md:flex justify-between p-1 px-6 rounded-full">
        <div className="flex gap-2 md:items-center mr-12">
          <GiAbstract037 />
          <h1>
            <Link to="/">CSS GENERATOR</Link>{" "}
          </h1>
        </div>
        <div className="flex gap-3  relative" ref={parentref}>
          <div
            className="bg-white absolute  left-[-30px] w-[20px] h-full transition-all duration-500 ease-in-out pointer-events-none rounded-3xl opacity-0"
            ref={ref}
          ></div>
          <div
            className="font-semibold px-4  p-1 rounded-3xl z-10 hover:text-black duration-500 ease-out"
            ref={portref}
            onMouseEnter={(e) => handlenavbarenter(e, 0)}
            onMouseLeave={handlenavbarleave}
          >
            <Link>Portfolio</Link>
          </div>
          <div
            className="font-semibold px-4  p-1 rounded-3xl flex flex-col nav_ele_container overflow-hidden z-10"
            onMouseEnter={(e) => handlenavbarenter(e, 1)}
            ref={signupref}
            onMouseLeave={handlenavbarleave}
          >
            <Link
              to="/user/signup"
              className="hover:text-black hover:font-semibold duration-500 ease-out"
            >
              Signup
            </Link>
          </div>
          <div
            className="px-4  p-1 rounded-3xl nav_ele_container overflow-hidden font-semibold z-10"
            onMouseEnter={(e) => handlenavbarenter(e, 2)}
            onMouseLeave={handlenavbarleave}
            ref={loginref}
          >
            <Link
              to="/user/login"
              className="hover:text-black hover:font-semibold duration-500 ease-out"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
