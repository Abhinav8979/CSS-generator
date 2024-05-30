import React from "react";
import { Link } from "react-router-dom";
import { cssprop } from "../../Utils/Cssprop";

const CssPropertiesList = () => {
  return (
    <section className="flex flex-col min-h-screen bg-[#0F0F0F] text-white">
      <div className="p-4 px-8 border border-neutral-700">
        <h2 className="text-2xl font-semibold">CSS Generator</h2>
        <p className="text-sm font-light">
          Generate highly customizable CSS properties. Preview the results
          before copying them to your website.
        </p>
      </div>
      <div className="flex flex-col p-4 px-8 gap-7">
        {cssprop.map((props, i) => {
          return (
            <div className="font-semibold text-xl text-[#bde0fe]">
              <h2 className="">{props.name}</h2>
              <div className="flex flex-wrap  text-neutral-400 font-normal text-base">
                <div className="flex gap-5 flex-wrap font-normal mt-3">
                  {props.nameprops.map((prop, i) => {
                    return (
                      <Link
                        to={props.link}
                        className="flex justify-between px-3 py-2 border  md:w-[300px]  bg-neutral-900 rounded-lg cursor-pointer"
                      >
                        <p>{prop}</p>
                        <p>&rarr;</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CssPropertiesList;
