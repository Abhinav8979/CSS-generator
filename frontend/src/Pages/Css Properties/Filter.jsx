import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../Context/UserContext";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import axios from "axios";

const Filter = () => {
  const [blur, setBlur] = useState(0);
  const [saturate, setSaturate] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [grayscale, setGrayscale] = useState(1);
  const [huerotate, setHuerotate] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [invert, setInvert] = useState(0);
  const [click, setClick] = useState(false);

  const [param, setParam] = useState();
  const parameter = useParams();

  const user = useContext(UserContext);

  useEffect(() => {
    setParam(parameter.filterId);
    setClick(user.isItemInCart(parameter.filterId));
  }, [parameter]);

  const handleLike = async () => {
    const res = await axios.put("http://localhost:8000/api/user/addcart", {
      data: {
        cssName: param,
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
          cssName: param,
          email: localStorage.getItem("user"),
        },
      }
    );
    user.setCartLen((prev) => prev - 1);
    setClick(false);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    setBlur(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `blur(${blur}px)`;
  };

  const handleSaturate = (e) => {
    e.preventDefault();
    setSaturate(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `saturate(${saturate}%)`;
  };

  const handleBrightness = (e) => {
    e.preventDefault();
    setBrightness(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `brightness(${brightness}%)`;
  };

  const handleContrast = (e) => {
    e.preventDefault();
    setContrast(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `contrast(${contrast}%)`;
  };

  const handleGrayscale = (e) => {
    e.preventDefault();
    setGrayscale(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `grayscale(${grayscale}%)`;
  };

  const handleHuerotate = (e) => {
    e.preventDefault();
    setHuerotate(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `hue-rotate(${huerotate}deg)`;
  };

  const handleInvert = (e) => {
    e.preventDefault();
    setInvert(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `invert(${invert}%)`;
  };

  const handleSepia = (e) => {
    e.preventDefault();
    setSepia(e.target.value);
    const newColor = document.getElementsByClassName("filter");
    newColor[0].style.filter = `sepia(${sepia}%)`;
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

          {/* BLUR */}
          <div id="filter" className="flex flex-col gap-5 ">
            {param === "blur" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col">
                <div className="border p-2 px-4 rounded-lg css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Blur</h2>
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
                      defaultValue="100"
                      type="range"
                      min="0"
                      max="50"
                      step="1"
                      value={blur}
                      onChange={handleBlur}
                    />
                    <p>{blur}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Saturation */}

            {param === "saturate" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col">
                <div className="border p-2 px-4 rounded-lg css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Saturate</h2>
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
                      defaultValue="100"
                      type="range"
                      min="1"
                      max="300"
                      step="1"
                      value={saturate}
                      onChange={handleSaturate}
                    />
                    <p>{saturate}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Brightness */}

            {param === "brightness" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col">
                <div className="border p-2 px-4 rounded-lg css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Brightness</h2>
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
                      defaultValue="100"
                      type="range"
                      min="1"
                      max="300"
                      step="1"
                      value={brightness}
                      onChange={handleBrightness}
                    />
                    <p>{brightness}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contrast */}

            {param === "contrast" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col">
                <div className="border p-2 px-4 rounded-lg css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Contrast</h2>
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
                      defaultValue="100"
                      type="range"
                      min="1"
                      max="200"
                      step="1"
                      value={contrast}
                      onChange={handleContrast}
                    />
                    <p>{contrast}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Grayscale */}

            {param === "grayscale" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col">
                <div className="border p-2 px-4 rounded-lg css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Grayscale</h2>
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
                      defaultValue="100"
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      value={grayscale}
                      onChange={handleGrayscale}
                    />
                    <p>{grayscale}</p>
                  </div>
                </div>
              </div>
            )}

            {/* hue rotate */}
            {param === "huerotate" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col">
                <div className="border p-2 px-4 rounded-lg css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Hue Rotate</h2>
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
                      defaultValue="100"
                      type="range"
                      min="1"
                      max="360"
                      step="1"
                      value={huerotate}
                      onChange={handleHuerotate}
                    />
                    <p>{huerotate}</p>
                  </div>
                </div>
              </div>
            )}

            {/* sepia */}

            {param === "sepia" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col">
                <div className="border p-2 px-4 rounded-lg css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Sepia</h2>
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
                      defaultValue="100"
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      value={sepia}
                      onChange={handleSepia}
                    />
                    <p>{sepia}</p>
                  </div>
                </div>
              </div>
            )}

            {/* invert */}

            {param === "invert" && (
              <div className="md:px-7 px-4 flex gap-3 flex-col ">
                <div className="border p-2 px-4 rounded-lg  css_prop">
                  <div className="flex  justify-between">
                    <h2 className="text-sm  text-neutral-300">Invert</h2>
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
                      defaultValue="100"
                      type="range"
                      min="1"
                      max="100"
                      step="1"
                      value={invert}
                      onChange={handleInvert}
                    />
                    <p>{invert}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* PREVIEW AND CODE SECTION */}

        <div className="md:w-1/2 w-full flex flex-col border border-[#212121]">
          <div className="w-full h-2/3 font-semibold border-b overflow-hidden">
            <div className="bg-neutral-900 pl-8 text-sm py-2">
              <h2>Preview</h2>
            </div>
            <div className="flex justify-center items-center md:h-full w-full h-full p-5">
              <img
                src="/rat.jpg"
                alt="an img"
                className="filter w-full h-full"
              />
            </div>
          </div>
          <div className="w-full h-[30vh] md:h-2/5">
            <div className="bg-neutral-900 pl-8 text-sm py-2 font-semibold">
              <h2>Code</h2>
            </div>
            <div className="p-2 px-4">
              {param === "blur" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]"> blur({blur}px)</span>;
                </p>
              )}
              {param === "saturate" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]">saturate({saturate}%)</span>;
                </p>
              )}
              {param === "brightness" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]">
                    brightness({brightness}%)
                  </span>
                  ;
                </p>
              )}
              {param === "contrast" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]">contrast({contrast}%);</span>
                </p>
              )}
              {param === "grayscale" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]">
                    grayscale({grayscale}%)
                  </span>
                  ;
                </p>
              )}
              {param === "huerotate" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]">
                    hue-rotate({huerotate}deg)
                  </span>
                  ;
                </p>
              )}
              {param === "sepia" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]">sepia({sepia}%)</span>;
                </p>
              )}
              {param === "invert" && (
                <p>
                  filter:{" "}
                  <span className="text-[#15F5BA]">invert({invert}%)</span>;
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
