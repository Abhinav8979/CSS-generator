import React from "react";

import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className=" w-full bg-[#0F0F0F] h-screen">
      
      <div className=" h-screen absolute inset-0 z-10 overflow-hidden">
        <iframe
          src="https://my.spline.design/robotinteractiveevents-f19bc6ab0a963184d2c2c0304d2d73ff/"
          width="100%"
          height="100%"
          loading="eager"
        ></iframe>
      </div>
      <Outlet />
    </div>
  );
};

export default Auth;
