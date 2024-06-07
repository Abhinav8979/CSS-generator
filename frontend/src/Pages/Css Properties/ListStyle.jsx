import React, { useState } from "react";
import Mouse from "../../Utils/Mouse";

const ListStyle = () => {
  const [listStyle, setListStyle] = useState("disc");

  const handleListStyle = (e) => {
    e.preventDefault();
    setListStyle(e.target.value);

    const newListStyle = document.getElementsByClassName("list");
    newListStyle[0].style.listStyleType = e.target.value;
  };
  return (
    <Mouse>
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
                <h2 className="text-sm  text-neutral-300">List style</h2>
                <div className="flex gap-5">
                  <select
                    name="list-style"
                    className="text-white outline-none bg-neutral-800 p-1 rounded-lg"
                    onChange={handleListStyle}
                  >
                    <option value="disc">disc</option>
                    <option value="armenian">armenian</option>
                    <option value="decimal">decimal</option>
                    <option value="upper-roman">upper-roman</option>
                    <option value="upper-greek">upper-greek</option>
                    <option value="katakana-iroha">katakana-iroha</option>
                    <option value="square">square</option>
                    <option value="none">none</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* PREVIEW AND CODE SECTION */}

          <div className="md:w-1/2 w-full flex flex-col border border-[#212121]">
            <div className="w-full h-2/3 font-semibold border-b overflow-hidden">
              <div className="bg-neutral-900 pl-8 text-sm py-2">
                <h2>Preview</h2>
              </div>
              <div className="flex justify-center items-center md:h-full w-full h-full p-5 text-4xl">
                <ul className="list" style={{ listStyleType: "disc" }}>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem.</li>
                </ul>
              </div>
            </div>
            <div className="w-full h-[30vh] md:h-2/5">
              <div className="bg-neutral-900 pl-8 text-sm py-2 font-semibold">
                <h2>Code</h2>
              </div>
              <div className="p-2 px-4">
                <p>
                  list-style:{" "}
                  <span className="text-[#15F5BA]">{listStyle}</span>;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Mouse>
  );
};

export default ListStyle;
