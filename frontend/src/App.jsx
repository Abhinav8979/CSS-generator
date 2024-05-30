import { Link } from "react-router-dom";
import "./App.css";
import Favorite from "./Components/Homepage/Favorite";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-black text-gray-300 flex justify-center md:items-center md:h-screen lg:-mt-12 pt-4 lg:pt-0">
        <div className=" md:text-center max-w-[55%] leading-tight">
          <h1
            className="md:text-8xl text-3xl font-bold "
            style={{
              textShadow: "0 2px 0 #c6c6c6",
            }}
          >
            Website
          </h1>
          <h1
            className="md:text-7xl text-3xl font-bold"
            style={{
              textShadow: "0 2px 0 #c6c6c6",
            }}
          >
            TO BOOST YOUR
            <br />
            <span
              style={{
                WebkitTextStroke: "white",
                WebkitTextStrokeWidth: "1px",
                WebkitTextFillColor: "black",
              }}
            >
              PRODUCTIVITY
            </span>
          </h1>
          <p className="text-white mt-7 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti
            <br className="hidden md:block" /> quod est omnis.
          </p>
          <button
            className="z-10 px-3 py-2 border border-black bg-black mt-6 w-[130px] rounded-lg"
            id="get_started"
          >
            <Link to="/cssproperties/list">
              <span className="z-10 text-white relative">Get Started</span>
            </Link>
          </button>
        </div>
      </div>
      <Favorite />
    </>
  );
}

export default App;
