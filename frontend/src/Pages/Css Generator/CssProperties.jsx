import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { cssprop } from "../../Utils/Cssprop";
import Mouse from "../../Utils/Mouse";

const CssProperties = () => {
  return (
    <Mouse>
      <section className="flex">
        <div className="bg-[#0f0f0f] min-h-screen w-[16%] border-[.5px] border-neutral-700 p-4 text-neutral-200 hidden md:block">
          <div className="font-semibold text-xl cursor-pointer">
            <Link to="/">
              <h2>Css Generator</h2>
            </Link>
            <div className="flex flex-col gap-3 py-2">
              {cssprop.map((props, i) => {
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <h2 className="text-normal font-normal text-[#bde0fe]">
                      {props.name}
                    </h2>
                    <div className="mt-[-5px]">
                      <div className="px-3 w-fit ">
                        {props.children.map((prop, i) => {
                          return (
                            <Link
                              key={i}
                              to={prop.link}
                              className="text-sm  font-light hover:text-[#FFEBB2] transition-all duration-100"
                            >
                              <p className="p-1 px-3 rounded-xl hover:bg-[#8644A2]">
                                {prop.name}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8">{/* CSS PROPERTIES ENTRY TO BE FILLED  */}</div>
        </div>
        <div className="md:w-[84%] w-full">
          <Outlet />
        </div>
      </section>
    </Mouse>
  );
};

export default CssProperties;
