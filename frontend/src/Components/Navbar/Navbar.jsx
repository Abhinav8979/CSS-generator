import React, { useEffect, useRef, useState } from "react";
import { GiAbstract037 } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const parentref = useRef();
  const ref = useRef();
  const portref = useRef();
  const signupref = useRef();
  const loginref = useRef();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  });

  const handlenavbarenter = (e, index) => {
    let left;
    let width;

    // const parentwidth = parentref.current.getBoundingClientRect().width;
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
    <nav className="w-full md:flex  justify-center items-center text-white pt-5 hidden">
      <div className="bg-[#1A1A1A] md:flex justify-between p-1 px-6 rounded-full z-20">
        <div className="flex gap-2 md:items-center mr-12 z-20">
          <GiAbstract037 />
          <h1>
            <Link to="/">CSS GENERATOR</Link>{" "}
          </h1>
        </div>
        <div className="flex gap-3  relative" ref={parentref}>
          <div
            className="bg-white z-20 absolute  left-[-30px] w-[20px] h-full transition-all duration-500 ease-in-out pointer-events-none rounded-3xl opacity-0"
            ref={ref}
          ></div>
          <div
            className="font-semibold px-4  p-1 rounded-3xl z-20 hover:text-black duration-500 ease-out"
            ref={portref}
            onMouseEnter={(e) => handlenavbarenter(e, 0)}
            onMouseLeave={handlenavbarleave}
          >
            <Link to="/cssproperties/list">Properties</Link>
          </div>
          <div
            className="font-semibold px-4  p-1 rounded-3xl flex flex-col nav_ele_container overflow-hidden z-20 hover:text-black hover:font-semibold"
            onMouseEnter={(e) => handlenavbarenter(e, 1)}
            ref={signupref}
            onMouseLeave={handlenavbarleave}
          >
            <Link to="/user/signup" className="duration-500 ease-out">
              Signup
            </Link>
          </div>
          <div
            className="px-4  p-1 rounded-3xl nav_ele_container overflow-hidden font-semibold z-20 hover:text-black hover:font-semibold"
            onMouseEnter={(e) => handlenavbarenter(e, 2)}
            onMouseLeave={handlenavbarleave}
            ref={loginref}
          >
            {!user ? (
              <Link to="/user/login" className=" duration-500 ease-out">
                Login
              </Link>
            ) : (
              <span
                onClick={() => {
                  localStorage.removeItem("user");
                  location.reload();
                }}
                className="cursor-pointer"
              >
                LogOut
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
