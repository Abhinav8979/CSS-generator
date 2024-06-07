import React, { useRef } from "react";

const Mouse = ({ children }) => {
  const ref = useRef();

  const handleCursor = (e) => {
    const cursor = ref.current;

    let x = e.pageX;
    let y = e.pageY;

    if (x < 1490) {
      cursor.style.left = x - 20 + "px";
    }
    cursor.style.top = y + "px";
  };
  const handleCursorLeave = (e) => {
    const cursor = ref.current;
    cursor.style.display = "none";
  };
  const handleCursorEnter = (e) => {
    const cursor = ref.current;
    cursor.style.display = "block";
  };

  return (
    <div
      onMouseMove={handleCursor}
      onMouseEnter={handleCursorEnter}
      onMouseLeave={handleCursorLeave}
      className="overflow-hidden"
    >
      <div
        ref={ref}
        className="hidden md:block  w-[50px] bg-white md:blur-[45px]  rounded-full h-[50px] absolute  z-20 pointer-events-none"
      ></div>
      {children}
    </div>
  );
};

export default Mouse;
