import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../Context/UserContext";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Boxprop = () => {
  const [bordervalue, setBordervalue] = useState([0, "solid", "#000"]);
  const [borderradiusvalue, setBorderradiusvalue] = useState(0);
  const [outlinevalue, setOutlinevalue] = useState([0, "solid", "#000", 0]);
  const [boxshadow, setBoxshadow] = useState([0, 0, 0, 0, "#000"]);
  const [click, setClick] = useState(false);

  const [param, setParam] = useState();
  const parameter = useParams();

  const user = useContext(UserContext);

  useEffect(() => {
    setParam(parameter.boxId);
    console.log(parameter);
  }, [parameter]);

  const handleLike = async () => {
    const res = await axios.put("http://localhost:8000/api/user/addcart", {
      data: {
        cssName: param,
        email: user.userEmail,
      },
    });
    // console.log(res);
    setClick(true);
  };

  const handleDislike = async () => {
    const res = await axios.delete(
      "http://localhost:8000/api/user/removecart",
      {
        data: {
          cssName: param,
          email: user.userEmail,
        },
      }
    );
    setClick(false);
  };

  const handleBordervalue = (e, index) => {
    e.preventDefault();
    const value = e.target.value;

    setBordervalue((prev) => {
      const newBordervalue = [...prev];
      newBordervalue[index] = value;
      return newBordervalue;
    });

    const newborder = document.getElementsByClassName("box_preview");
    newborder[0].style.border = `${bordervalue[0]}px ${bordervalue[1]} ${bordervalue[2]}`;
  };

  const handleborderradius = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setBorderradiusvalue(value);
    const newborderradius = document.getElementsByClassName("box_preview");
    newborderradius[0].style.borderRadius = `${borderradiusvalue}px`;
  };

  const handleoutlinevalue = (e, index) => {
    e.preventDefault();
    const value = e.target.value;

    setOutlinevalue((prev) => {
      const newoutlinevalue = [...prev];
      newoutlinevalue[index] = value;
      return newoutlinevalue;
    });

    const newborder = document.getElementsByClassName("box_preview");
    newborder[0].style.outline = `${outlinevalue[0]}px ${outlinevalue[1]} ${outlinevalue[2]}`;
    newborder[0].style.outlineOffset = `${outlinevalue[3]}px`;
  };

  const handleBoxshadow = (e, index) => {
    e.preventDefault();
    const value = e.target.value;
    setBoxshadow((prev) => {
      const newTextshadow = [...prev];
      newTextshadow[index] = value;
      return newTextshadow;
    });
    const newTextshadow = document.getElementsByClassName("box_preview");
    // console.log(newTextshadow[0].style);
    newTextshadow[0].style.boxShadow = `${boxshadow[0]}px ${boxshadow[1]}px ${boxshadow[2]}px  ${boxshadow[3]}px ${boxshadow[4]}`;
    console.log(newTextshadow[0].style.boxShadow);
  };

  return (
    <section className="text-white bg-[#0F0F0F] md:h-full">
      <div className="pl-8 px-7 p-5 text-4xl font-bold">
        <h1>Box CSS Generator</h1>
      </div>
      <div className="flex flex-col md:flex-row  h-fit md:min-h-screen">
        <div className="flex flex-col gap-5 border border-[#7b7b7b] pb-4  w-full md:w-1/2">
          <div className="bg-neutral-900 font-semibold pl-8 text-sm py-2">
            <h2>Options</h2>
          </div>
          <div className="md:px-7 px-4 flex gap-3 flex-col">
            {/* Border */}

            {param === "border" && (
              <div className="border border-neutral-400 p-2 px-4 rounded-lg pb-4">
                <div className="flex  justify-between">
                  <h2 className="text-sm  text-neutral-300">Border</h2>
                  <p>
                    {click ? (
                      <FaHeart onDoubleClick={handleDislike} />
                    ) : (
                      <CiHeart onDoubleClick={handleLike} />
                    )}
                  </p>
                </div>
                <div className="border border-[#a2a2a2] p-2 px-4 mt-2 rounded-lg flex flex-col gap-5">
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Border Width</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="20"
                      step="1"
                      onChange={(e) => handleBordervalue(e, 0)}
                    />
                    <p>{bordervalue[0]}</p>
                  </div>
                  <div className="flex md:gap-2 gap-2 md:flex-row flex-col">
                    <h3>Border Style</h3>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="solid"
                        checked
                        className="text-white"
                        onChange={(e) => handleBordervalue(e, 1)}
                      />
                      solid
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="dotted"
                        className="text-white"
                        onChange={(e) => handleBordervalue(e, 1)}
                      />
                      dotted
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="dashed"
                        className="text-white"
                        onChange={(e) => handleBordervalue(e, 1)}
                      />
                      dashed
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="groove"
                        className="text-white"
                        onChange={(e) => handleBordervalue(e, 1)}
                      />
                      groove
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="double"
                        className="text-white"
                        onChange={(e) => handleBordervalue(e, 1)}
                      />
                      double
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="inset"
                        className="text-white"
                        onChange={(e) => handleBordervalue(e, 1)}
                      />
                      inset
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="outset"
                        className="text-white"
                        onChange={(e) => handleBordervalue(e, 1)}
                      />
                      outset
                    </label>
                    <p className="w-[100px] text-end">{bordervalue[1]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Border Color</h3>
                    <input
                      type="color"
                      className="bg-transparent"
                      onChange={(e) => handleBordervalue(e, 2)}
                    />
                    <p>{bordervalue[2]}</p>
                  </div>
                </div>
              </div>
            )}

            {/* border radius */}

            {param === "borderradius" && (
              <div className="border border-neutral-400  p-2 px-4 rounded-lg">
                <div className="flex  justify-between">
                  <h2 className="text-sm  text-neutral-300">Border Radius</h2>
                  <p>
                    {click ? (
                      <FaHeart onDoubleClick={handleDislike} />
                    ) : (
                      <CiHeart onDoubleClick={handleLike} />
                    )}
                  </p>
                </div>{" "}
                <div className="flex gap-5">
                  <input
                    defaultValue="0"
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    onChange={handleborderradius}
                  />
                  <p>{borderradiusvalue}</p>
                </div>
              </div>
            )}

            {/* Outline */}

            {param === "outline" && (
              <div className="border border-neutral-400  p-2 px-4 rounded-lg pb-4">
                <div className="flex  justify-between">
                  <h2 className="text-sm  text-neutral-300">Outline</h2>
                  <p>
                    {click ? (
                      <FaHeart onDoubleClick={handleDislike} />
                    ) : (
                      <CiHeart onDoubleClick={handleLike} />
                    )}
                  </p>
                </div>{" "}
                <div className="border border-[#a2a2a2] p-2 px-4 mt-2 rounded-lg flex flex-col gap-5">
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Outline Width</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="20"
                      step="1"
                      onChange={(e) => handleoutlinevalue(e, 0)}
                    />
                    <p>{outlinevalue[0]}</p>
                  </div>
                  <div className="flex md:gap-2 gap-2 md:flex-row flex-col">
                    <h3>Outline Style</h3>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="solid"
                        checked
                        className="text-white"
                        onChange={(e) => handleoutlinevalue(e, 1)}
                      />
                      solid
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="dotted"
                        className="text-white"
                        onChange={(e) => handleoutlinevalue(e, 1)}
                      />
                      dotted
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="dashed"
                        className="text-white"
                        onChange={(e) => handleoutlinevalue(e, 1)}
                      />
                      dashed
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="groove"
                        className="text-white"
                        onChange={(e) => handleoutlinevalue(e, 1)}
                      />
                      groove
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="style"
                        value="double"
                        className="text-white"
                        onChange={(e) => handleoutlinevalue(e, 1)}
                      />
                      double
                    </label>
                    <p className="w-[100px] text-end">{outlinevalue[1]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Outline Color</h3>
                    <input
                      type="color"
                      className="bg-transparent"
                      onChange={(e) => handleoutlinevalue(e, 2)}
                    />
                    <p>{outlinevalue[2]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Outline Width</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="30"
                      step="1"
                      onChange={(e) => handleoutlinevalue(e, 3)}
                    />
                    <p>{outlinevalue[3]}</p>
                  </div>
                </div>
              </div>
            )}

            {/* BORDER SHADOW */}

            {param === "shadow" && (
              <div className="border border-neutral-400  p-2 px-4 rounded-lg pb-4">
                <div className="flex  justify-between">
                  <h2 className="text-sm  text-neutral-300">Border Shadow</h2>
                  <p>
                    {click ? (
                      <FaHeart onDoubleClick={handleDislike} />
                    ) : (
                      <CiHeart onDoubleClick={handleLike} />
                    )}
                  </p>
                </div>{" "}
                <div className="border border-[#a2a2a2] p-2 px-4 mt-2 rounded-lg flex flex-col gap-5">
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Horizontal shadow Length</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="-200"
                      max="200"
                      step="1"
                      onChange={(e) => handleBoxshadow(e, 0)}
                    />
                    <p>{boxshadow[0]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Vertical shadow Length</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="-200"
                      max="200"
                      step="1"
                      onChange={(e) => handleBoxshadow(e, 1)}
                    />
                    <p>{boxshadow[1]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Blur Radius</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="50"
                      step="1"
                      onChange={(e) => handleBoxshadow(e, 2)}
                    />
                    <p>{boxshadow[2]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Spread</h3>
                    <input
                      type="range"
                      min="0"
                      max="50"
                      className="bg-transparent"
                      onChange={(e) => handleBoxshadow(e, 3)}
                    />
                    <p>{boxshadow[3]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>Color</h3>
                    <input
                      type="color"
                      className="bg-transparent"
                      onChange={(e) => handleBoxshadow(e, 4)}
                    />
                    <p>{boxshadow[4]}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col border border-[#7b7b7b]">
          <div className="w-full h-2/3 font-semibold border-b overflow-hidden">
            <div className="bg-neutral-900 pl-8 text-sm py-2">
              <h2>Preview</h2>
            </div>
            <div className="flex justify-center items-center h-[30vh] md:h-full">
              {/* <p className="text_size text-[100px] font-[100]">Text</p> */}
              <div className="w-[200px] h-[100px] box_preview bg-white"></div>
            </div>
          </div>
          <div className="w-full h-[30vh] md:h-2/5">
            <div className="bg-neutral-900 pl-8 text-sm py-2 font-semibold">
              <h2>Code</h2>
            </div>
            <div className="p-2 px-4">
              {param === "border" && (
                <p>
                  border:{" "}
                  <span className="text-[#15F5BA]">
                    {bordervalue[0]}px {bordervalue[1]} {bordervalue[2]}
                  </span>
                  ;
                </p>
              )}
              {param === "borderradius" && (
                <p>
                  border-radius:{" "}
                  <span className="text-[#15F5BA]">{borderradiusvalue}px</span>;
                </p>
              )}
              {param === "outline" && (
                <p>
                  outline:{" "}
                  <span className="text-[#15F5BA]">
                    {outlinevalue[0]}px {outlinevalue[1]} {outlinevalue[2]}
                  </span>
                  ;
                </p>
              )}
              {outlinevalue[3] !== 0 ? (
                <p>
                  outline-offset:{" "}
                  <span className="text-[#15F5BA]">{outlinevalue[3]}</span>
                </p>
              ) : null}
              {param === "shadow" && (
                <p>
                  box-shadow:{" "}
                  <span className="text-[#15F5BA]">
                    {boxshadow[0]}px {boxshadow[1]}px {boxshadow[2]}px{" "}
                    {boxshadow[3]}px {boxshadow[4]}
                  </span>
                  ;
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxprop;
