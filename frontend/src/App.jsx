import "./App.css";
import Favorite from "./Components/Homepage/Favorite";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-full bg-black text-white flex justify-center md:items-center md:h-screen lg:-mt-12 pt-4 lg:pt-0">
        <div className=" md:text-center max-w-[55%] leading-tight">
          <h1
            className="md:text-8xl text-3xl font-bold "
            style={{
              textShadow: "0px 0px 5px #FFFFFF",
            }}
          >
            Website
          </h1>
          <h1
            className="md:text-7xl text-3xl font-bold"
            style={{
              textShadow: "0px 0px 5px #FFFFFF",
            }}
          >
            TO BOOST YOUR PRODUCTIVITY
          </h1>
          <p className="text-white mt-7 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Corrupti
            <br className="hidden md:block" /> quod est omnis.
          </p>
          <button className="px-3 py-2 border border-white mt-6 w-[130px] rounded-lg">
            Let's Go
          </button>
        </div>
      </div>
      <Favorite />
    </>
  );
}

export default App;
