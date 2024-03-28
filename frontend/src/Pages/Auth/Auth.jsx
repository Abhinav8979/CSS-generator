import React from "react";

import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="bg-slate-700 w-full h-screen">
      <Outlet />
    </div>
  );
};

export default Auth;
