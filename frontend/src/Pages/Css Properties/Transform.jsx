import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";

const Transform = () => {
  //   const [prespective, setPrespective] = useState(0);
  const [rotate, setRotate] = useState([0, 0, 0]);
  const [skew, setSkew] = useState([0, 0]);
  const [translate, setTranslate] = useState([0, 0]);
  const [scale, setScale] = useState([1, 1, 1]);
  const [sameScale, setSameScale] = useState(false);
  const [sameRotation, setSameRotation] = useState(false);

  const [click, setClick] = useState(false);

  const [param, setParam] = useState();
  const parameter = useParams();

  const user = useContext(UserContext);

  useEffect(() => {
    setParam(parameter.transformId);
    setClick(user.isItemInCart(parameter.transformId));
  }, [parameter]);

  const handleLike = async () => {
    const res = await axios.put("http://localhost:8000/api/user/addcart", {
      data: {
        cssName: param,
        email: localStorage.getItem("user"),
      },
    });
    // console.log(res);
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

  const handleRotate = (e, index) => {
    e.preventDefault();
    const value = e.target.value;

    setRotate((prev) => {
      const newrotate = [...prev];
      newrotate[index] = value;
      return newrotate;
    });
    const newColor = document.getElementsByClassName("transform_child");
    if (!index) {
      newColor[0].style.transform = `rotate(${rotate[0]}deg)`;
    } else {
      newColor[0].style.transform = `rotateX(${rotate[1]}deg) rotateY(${rotate[2]}deg)`;
    }
  };

  const handleSkew = (e, index) => {
    e.preventDefault();
    const value = e.target.value;
    setSkew((prev) => {
      const newSkew = [...prev];
      newSkew[index] = value;
      return newSkew;
    });
    const newColor = document.getElementsByClassName("transform_child");
    newColor[0].style.transform = `skew(${skew[0]}deg, ${skew[1]}deg)`;
  };

  const handleTranslate = (e, index) => {
    e.preventDefault();
    const value = e.target.value;
    setTranslate((prev) => {
      const newTranslate = [...prev];
      newTranslate[index] = value;
      return newTranslate;
    });
    const newColor = document.getElementsByClassName("transform_child");
    newColor[0].style.transform = `translate(${translate[0]}px, ${translate[1]}px)`;
  };

  const handleScale = (e, index) => {
    e.preventDefault();
    const value = e.target.value;

    setScale((prev) => {
      const newScale = [...prev];
      newScale[index] = value;
      return newScale;
    });
    const newColor = document.getElementsByClassName("transform_child");
    if (!index) {
      newColor[0].style.transform = `scale(${scale[0]})`;
    } else {
      newColor[0].style.transform = `scale(${scale[1]}, ${scale[2]})`;
    }
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

          {/* Rotation */}

          {param === "rotate" && (
            <div className="border p-2 mx-7 px-4 rounded-lg pb-4">
              <div className="flex  justify-between">
                <h2 className="text-sm  text-neutral-300">Rotate</h2>
                <p>
                  {click ? (
                    <FaHeart onDoubleClick={handleDislike} />
                  ) : (
                    <CiHeart onDoubleClick={handleLike} />
                  )}
                </p>
              </div>{" "}
              <div>
                <input
                  type="checkbox"
                  onChange={() => setSameRotation((prev) => !prev)}
                />
                <span className="pl-2">Use the same value for X and Y</span>
              </div>
              {sameRotation ? (
                <div className="md:px-7 px-4 flex gap-3 flex-col">
                  <div className="border p-2 px-4 rounded-lg">
                    <h2 className="text-sm  text-neutral-300">Rotate</h2>
                    <div className="flex gap-5">
                      <input
                        defaultValue="100"
                        type="range"
                        min="0"
                        max="360"
                        step="1"
                        value={rotate[0]}
                        onChange={(e) => handleRotate(e, 0)}
                      />
                      <p>{rotate[0]}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border border-[#a2a2a2] p-2 px-4 mt-2 rounded-lg flex flex-col gap-5">
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>rotateX</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="360"
                      step="1"
                      onChange={(e) => handleRotate(e, 1)}
                    />
                    <p>{rotate[1]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>rotateY</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="360"
                      step="1"
                      onChange={(e) => handleRotate(e, 2)}
                    />
                    <p>{rotate[2]}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scale */}

          {param === "scale" && (
            <div className="border p-2 mx-7 px-4 rounded-lg pb-4">
              <div className="flex  justify-between">
                <h2 className="text-sm  text-neutral-300">Scale</h2>
                <p>
                  {click ? (
                    <FaHeart onDoubleClick={handleDislike} />
                  ) : (
                    <CiHeart onDoubleClick={handleLike} />
                  )}
                </p>
              </div>{" "}
              <div>
                <input
                  type="checkbox"
                  onChange={() => setSameScale((prev) => !prev)}
                />
                <span className="pl-2">Use the same value for X and Y</span>
              </div>
              {sameScale ? (
                <div className="md:px-7 px-4 flex gap-3 flex-col">
                  <div className="border p-2 px-4 rounded-lg">
                    <h2 className="text-sm  text-neutral-300">Scale</h2>
                    <div className="flex gap-5">
                      <input
                        defaultValue="100"
                        type="range"
                        min="0"
                        max="2"
                        step=".1"
                        value={scale[0]}
                        onChange={(e) => handleScale(e, 0)}
                      />
                      <p>{scale[0]}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="border border-[#a2a2a2] p-2 px-4 mt-2 rounded-lg flex flex-col gap-5">
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>scaleX</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      onChange={(e) => handleScale(e, 1)}
                    />
                    <p>{scale[1]}</p>
                  </div>
                  <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                    <h3>scaleY</h3>
                    <input
                      defaultValue="0"
                      type="range"
                      min="0"
                      max="2"
                      step="0.1"
                      onChange={(e) => handleScale(e, 2)}
                    />
                    <p>{scale[2]}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Skew */}

          {param === "skew" && (
            <div className="border p-2 mx-7 px-4 rounded-lg pb-4">
              <div className="flex  justify-between">
                <h2 className="text-sm  text-neutral-300">Skew</h2>
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
                  <h3>SkewX</h3>
                  <input
                    defaultValue="0"
                    type="range"
                    min="0"
                    max="90"
                    step="1"
                    onChange={(e) => handleSkew(e, 0)}
                  />
                  <p>{skew[0]}</p>
                </div>
                <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                  <h3>SkewY</h3>
                  <input
                    defaultValue="0"
                    type="range"
                    min="0"
                    max="90"
                    step="1"
                    onChange={(e) => handleSkew(e, 1)}
                  />
                  <p>{skew[1]}</p>
                </div>
              </div>
            </div>
          )}

          {/* Translate */}

          {param === "translate" && (
            <div className="border p-2 px-4  mx-7 rounded-lg pb-4">
              <div className="flex  justify-between">
                <h2 className="text-sm  text-neutral-300">Translate</h2>
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
                  <h3>TranslateX</h3>
                  <input
                    defaultValue="0"
                    type="range"
                    min="-200"
                    max="200"
                    step="1"
                    onChange={(e) => handleTranslate(e, 0)}
                  />
                  <p>{translate[0]}</p>
                </div>
                <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                  <h3>TranslateY</h3>
                  <input
                    defaultValue="0"
                    type="range"
                    min="-200"
                    max="200"
                    step="1"
                    onChange={(e) => handleTranslate(e, 1)}
                  />
                  <p>{translate[1]}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PREVIEW AND CODE SECTION */}

        <div className="md:w-1/2 w-full flex flex-col border border-[#212121]">
          <div className="w-full h-2/3 font-semibold border-b overflow-hidden">
            <div className="bg-neutral-900 pl-8 text-sm py-2">
              <h2>Preview</h2>
            </div>
            <div className="flex justify-center items-center md:h-full w-full h-full p-5 transform_parent">
              <img
                src="/rat.jpg"
                alt="an img"
                className="transform_child w-1/2"
                style={{ transformStyle: "preserve-3d" }}
              />
            </div>
          </div>
          <div className="w-full h-[30vh] md:h-2/5">
            <div className="bg-neutral-900 pl-8 text-sm py-2 font-semibold">
              <h2>Code</h2>
            </div>
            <div className="p-2 px-4">
              {param === "rotate" && (
                <p>
                  transform:
                  <span className="text-[#15F5BA]">
                    {sameRotation
                      ? ` rotate${rotate[0]}`
                      : ` rotateX(${rotate[1]}) rotateY(${rotate[2]})`}
                  </span>
                  ;
                </p>
              )}
              {param === "scale" && (
                <p>
                  transform:
                  <span className="text-[#15F5BA]">
                    {sameScale
                      ? `scale(${scale[0]})`
                      : `scale(${scale[1]},${scale[2]})`}{" "}
                  </span>
                  ;
                </p>
              )}
              {param === "skew" && (
                <p>
                  transform:{" "}
                  <span className="text-[#15F5BA]">
                    {" "}
                    skew({(skew[0], skew[1])})
                  </span>
                  ;
                </p>
              )}
              {param === "translate" && (
                <p>
                  transform:{" "}
                  <span className="text-[#15F5BA]">
                    translate({translate[0]},{translate[1]})
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

export default Transform;
