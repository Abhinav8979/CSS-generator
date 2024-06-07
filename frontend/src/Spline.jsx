// import Navbar from "./Components/Navbar/Navbar";

export default function Splinemodel({ children }) {
  return (
    <section className="h-screen bg-black overflow-hidden">
      <div className=" h-screen absolute inset-0 z-10 overflow-hidden">
        <iframe
          src="https://my.spline.design/boxeshover-520dc9aaf4a4d77a49d10c342588af27/"
          width="100%"
          height="100%"
          className="scale-[1.5]"
        ></iframe>
      </div>
      <div className="relative overflow-hidden">{children}</div>
    </section>
  );
}
