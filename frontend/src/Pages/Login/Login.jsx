import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="max-w-[600px] flex flex-col gap-4 absolute top-1/2 left-[10%] -translate-y-1/2">
      <h2 className="text-7xl">
        Let's be{" "}
        <span
          style={{
            background:
              "-webkit-linear-gradient(90deg, rgba(220,245,251,1) 12%, rgba(97,238,232,1) 76%, rgba(27,240,231,1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          fast!
        </span>
      </h2>
      <p className="text-[#dcdcdc] text-xl">
        Log in to Website to start getting faster
      </p>
      <input
        type="text"
        className="outline-none focus:border-[#a7d2b9] border-2  bg-[#1A1D22] w-full mt-4 p-3 rounded-md text-white hover:border-[#358E5C]"
        placeholder="Email Address"
      />
      <input
        type="text"
        className="outline-none focus:border-[#8cfaba] border-2 bg-[#1A1D22] w-full p-3 rounded-md text-white hover:border-[#358E5C]"
        placeholder="Password"
      />
      <p
        style={{
          background:
            "-webkit-linear-gradient(90deg, rgba(220,245,251,1) 12%, rgba(97,238,232,1) 76%, rgba(27,240,231,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        forget password?
      </p>
      <button className="w-full rounded-md bg-[#8ADEE9] text-black text-center px-3 py-2 font-semibold">
        Log in
      </button>
      <p className="text-[#dcdcdc]">
        Dont have an account?
        <Link to="/user/signup" className="font-medium text-black pl-2">
          Sign up
        </Link>
      </p>
    </section>
  );
};

export default Login;
