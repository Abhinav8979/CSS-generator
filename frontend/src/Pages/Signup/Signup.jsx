import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { IoArrowBackOutline } from "react-icons/io5";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();

  const navigate = useNavigate();

  const signupHandle = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/signup", {
        data: {
          email: email,
          password: password,
          phoneNumber: number,
        },
      });
      toast(res.data.message);
    } catch (error) {
      console.log(error);
    }

    navigate("/user/login");
  };

  return (
    <>
      <section className="max-w-[600px] flex flex-col gap-4 absolute top-1/2 left-[10%] -translate-y-1/2 z-20">
        <div className="absolute -top-[20%]  -left-[20%]   scale-[2]">
          <Link to="/">
            <IoArrowBackOutline
              className="hover:bg-green-500 rounded-full"
              style={{ color: "white", scale: "2" }}
            />
          </Link>
        </div>
        <h2 className="text-7xl text-white">
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
        <p className="text-[#dcdcdc] text-xl ">
          Sign up to Website to start getting faster
        </p>

        <input
          type="text"
          className="outline-none focus:border-[#a7d2b9] border-2  bg-[#1A1D22] w-full p-3 rounded-md text-white hover:border-[#358E5C]"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="outline-none focus:border-[#8cfaba] border-2 bg-[#1A1D22] w-full p-3 rounded-md text-white hover:border-[#358E5C]"
          placeholder="Password"
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          className="outline-none focus:border-[#8cfaba] border-2 bg-[#1A1D22] w-full p-3 rounded-md text-white hover:border-[#358E5C]"
          placeholder="Phone Number"
          // value={password}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button
          onClick={() => signupHandle()}
          className="w-full rounded-md bg-[#8ADEE9] text-black text-center px-3 py-2 font-semibold"
        >
          Sign up
        </button>
        <div className="flex gap-3">
          <p
            className="text-[#dcdcdc]"
            style={{
              background:
                "-webkit-linear-gradient(90deg, rgba(220,245,251,1) 12%, rgba(97,238,232,1) 76%, rgba(27,240,231,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Already have an account?
          </p>
          <Link to="/user/login" className="font-medium text-white">
            Login
          </Link>
        </div>
      </section>
      <ToastContainer className="z-20" />
    </>
  );
};

export default Signup;
