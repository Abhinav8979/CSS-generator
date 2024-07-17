// import { data } from "autoprefixer";
// import axios from "axios";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Cursor = () => {
  const [cursor, setCursor] = useState("auto");
  const [click, setClick] = useState(false);

  const user = useContext(UserContext);

  useEffect(() => {
    setClick(user.isItemInCart("cursor"));
  }, []);

  const handleCursor = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCursor(value);
  };

  const handleLike = async () => {
    const res = await axios.put("http://localhost:8000/api/user/addcart", {
      data: {
        cssName: "cursor",
        email: localStorage.getItem("user"),
      },
    });
    user.setCartLen((prev) => prev + 1);
    setClick(true);
  };

  const handleDislike = async () => {
    const res = await axios.delete(
      "http://localhost:8000/api/user/removecart",
      {
        data: {
          cssName: "cursor",
          email: localStorage.getItem("user"),
        },
      }
    );
    user.setCartLen((prev) => prev - 1);
    setClick(false);
  };

  const handleHoverIn = (e) => {
    const newCursor = document.getElementsByClassName("cursor");
    newCursor[0].style.cursor = cursor;
  };
  const handleHoverOut = (e) => {
    const newCursor = document.getElementsByClassName("cursor");
    newCursor[0].style.cursor = "auto";
  };

  return (
    <section className="text-white bg-[#0F0F0F] md:h-full">
      <div className="pl-8 px-7 p-5 text-4xl font-bold">
        <h1>Text CSS Generator</h1>
      </div>
      <div className="flex flex-col md:flex-row  h-fit md:min-h-screen">
        {/* GENERATOR SECTION  */}

        <div className="flex flex-col gap-5  pb-4  w-full md:w-1/2">
          <div className="bg-neutral-900 font-semibold pl-8 text-sm py-2">
            <h2>Options</h2>
          </div>

          <div className="md:px-7 px-4 flex gap-3 flex-col">
            <div className="border p-2 px-4 rounded-lg css_prop">
              <div className="flex  justify-between">
                <h2 className="text-sm  text-neutral-300">Cursor</h2>
                <p>
                  {click ? (
                    <FaHeart onDoubleClick={handleDislike} />
                  ) : (
                    <CiHeart onDoubleClick={handleLike} />
                  )}
                </p>
              </div>{" "}
              <div className="flex gap-5">
                <select
                  name="list-style"
                  className="text-white outline-none bg-neutral-800 p-1 rounded-lg"
                  onChange={handleCursor}
                >
                  <option value="alias">alias</option>
                  <option value="cell">cell</option>
                  <option value="grab">grab</option>
                  <option value="grabing">grabing</option>
                  <option value="wait">wait</option>
                  <option value="zoom-out">zoom-out</option>
                  <option value="zoom-in">zoom-in</option>
                  <option value="text">text</option>
                  <option value="pointer">pointer</option>
                  <option value="not-allowed">not-allowed</option>
                  <option value="help">help</option>
                  <option value="crosshair">crosshair</option>
                  <option value="none">none</option>
                </select>
              </div>
            </div>
            {/* <div className="bg-pink-400 rounded-lg p-4" onClick={addtocart}>
              <h1>hello</h1>
            </div> */}
          </div>
        </div>

        {/* PREVIEW AND CODE SECTION */}

        <div className="md:w-1/2 w-full flex flex-col border border-[#212121]">
          <div className="w-full h-2/3 font-semibold border-b overflow-hidden">
            <div className="bg-neutral-900 pl-8 text-sm py-2">
              <h2>Preview</h2>
            </div>
            <div className="flex justify-center items-center md:h-full w-full h-full p-5">
              <div
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
                className="w-full h-full m-5 bg-neutral-800 cursor p-6"
              >
                <p className="text-xl text-white">Hover This</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[30vh] md:h-2/5">
            <div className="bg-neutral-900 pl-8 text-sm py-2 font-semibold">
              <h2>Code</h2>
            </div>
            <div className="p-2 px-4">
              <p>
                cursor: <span className="text-[#15F5BA]">{cursor}</span>;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cursor;
