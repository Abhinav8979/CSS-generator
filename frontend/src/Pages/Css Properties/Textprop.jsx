import React, { useState } from "react";

const Textprop = () => {
  const [textsize, setTextsize] = useState(100);
  const [letterspacing, setLetterspacing] = useState(0);
  const [color, setColor] = useState("#fff");
  const [weight, setWeight] = useState(100);

  const [textshadow, setTextshadow] = useState([0, 0, 0, "#000"]);

  const handleTextSize = (e) => {
    e.preventDefault();

    const value = parseFloat(e.target.value);
    setTextsize(value);

    const newTextsize = document.getElementsByClassName("text_size");
    newTextsize[0].style.fontSize = value + "px";
  };

  const handleLetterspacing = (e) => {
    e.preventDefault();

    const value = parseFloat(e.target.value);
    setLetterspacing(value);

    const newLetterspacing = document.getElementsByClassName("text_size");
    newLetterspacing[0].style.letterSpacing = value + "px";
  };

  const handleColors = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setColor(value);
    const newColor = document.getElementsByClassName("text_size");
    newColor[0].style.color = value;
  };

  const handletextweight = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setWeight(value);
    const newWeight = document.getElementsByClassName("text_size");
    newWeight[0].style.fontWeight = value;
  };

  const handleTextshadow = (e, index) => {
    e.preventDefault();
    const value = e.target.value;
    setTextshadow((prev) => {
      const newTextshadow = [...prev];
      newTextshadow[index] = value;
      return newTextshadow;
    });
    const newTextshadow = document.getElementsByClassName("text_size");
    newTextshadow[0].style.textShadow = `${textshadow[0]}px ${textshadow[1]}px ${textshadow[2]}px ${textshadow[3]}`;
  };
  
  return (
    <section className="text-white bg-black">
      <div className="pl-8 px-7 p-5 text-4xl font-bold">
        <h1>Text CSS Generator</h1>
      </div>
      <div className="flex flex-col md:flex-row  h-fit md:min-h-screen">
        <div className="flex flex-col gap-5 border border-[#7b7b7b] pb-4  w-full md:w-1/2">
          <div className="bg-neutral-900 font-semibold pl-8 text-sm py-2">
            <h2>Options</h2>
          </div>

          {/* Text SIZE */}

          <div className="md:px-7 px-4 flex gap-3 flex-col">
            <div className="border p-2 px-4 rounded-lg">
              <h2 className="text-sm  text-neutral-300">Text Size</h2>
              <div className="flex gap-5">
                <input
                  defaultValue="100"
                  type="range"
                  min="11"
                  max="200"
                  step="1"
                  onChange={handleTextSize}
                />
                <p>{textsize}</p>
              </div>
            </div>

            {/* LETTER SPACING */}

            <div className="border p-2 px-4 rounded-lg">
              <h2 className="text-sm  text-neutral-300">Letter Spacing</h2>
              <div className="flex gap-5">
                <input
                  defaultValue="0"
                  type="range"
                  min="11"
                  max="50"
                  step="1"
                  onChange={handleLetterspacing}
                />
                <p>{letterspacing}</p>
              </div>
            </div>

            {/* COLOR PICKER */}

            <div className="border p-2 px-4 rounded-lg">
              <h2 className="text-sm  text-neutral-300">Text Color</h2>
              <div className="flex gap-5">
                <input
                  type="color"
                  onChange={handleColors}
                  className="bg-transparent"
                  value={color}
                />
                <p>{color}</p>
              </div>
            </div>

            {/* Text Weight */}

            <div className="border p-2 px-4 rounded-lg">
              <h2 className="text-sm  text-neutral-300">Font Weight</h2>
              <div className="flex gap-5">
                <input
                  defaultValue="100"
                  type="range"
                  min="100"
                  max="900"
                  step="100"
                  onChange={handletextweight}
                />
                <p>{weight}</p>
              </div>
            </div>

            {/* TEXT SHADOW */}

            <div className="border p-2 px-4 rounded-lg pb-4">
              <h2 className="text-sm  text-neutral-300">Text Shadow</h2>
              <div className="border border-[#a2a2a2] p-2 px-4 mt-2 rounded-lg flex flex-col gap-5">
                <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                  <h3>Horizontal shadow Length</h3>
                  <input
                    defaultValue="0"
                    type="range"
                    min="-200"
                    max="200"
                    step="1"
                    onChange={(e) => handleTextshadow(e, 0)}
                  />
                  <p>{textshadow[0]}</p>
                </div>
                <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                  <h3>Vertical shadow Length</h3>
                  <input
                    defaultValue="0"
                    type="range"
                    min="-200"
                    max="200"
                    step="1"
                    onChange={(e) => handleTextshadow(e, 1)}
                  />
                  <p>{textshadow[1]}</p>
                </div>
                <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                  <h3>Blur Radius</h3>
                  <input
                    defaultValue="0"
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    onChange={(e) => handleTextshadow(e, 2)}
                  />
                  <p>{textshadow[2]}</p>
                </div>
                <div className="flex md:gap-5 gap-2 md:flex-row flex-col">
                  <h3>shadow Color</h3>
                  <input
                    type="color"
                    className="bg-transparent"
                    onChange={(e) => handleTextshadow(e, 3)}
                  />
                  <p>{textshadow[3]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex flex-col border border-[#7b7b7b]">
          <div className="w-full h-2/3 font-semibold border-b overflow-hidden">
            <div className="bg-neutral-900 pl-8 text-sm py-2">
              <h2>Preview</h2>
            </div>
            <div className="flex justify-center items-center h-[30vh] md:h-full">
              <p className="text_size text-[100px] font-[100]">Text</p>
            </div>
          </div>
          <div className="w-full h-[30vh] md:h-2/5">
            <div className="bg-neutral-900 pl-8 text-sm py-2 font-semibold">
              <h2>Code</h2>
            </div>
            <div className="p-2 px-4">
              <p>font-size: {textsize}px;</p>
              <p>letter-spacing: {letterspacing}px;</p>
              <p>color: {color};</p>
              <p>font-weight: {weight};</p>
              <p>
                text-shadow: {textshadow[0]}px {textshadow[1]}px {textshadow[2]}
                px {textshadow[3]};
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Textprop;
