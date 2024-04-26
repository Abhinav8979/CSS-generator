import React from "react";

const Favorite = () => {
  //Fav Cards Wil Come from Backend in Near Future......
  const favCards = [
    {
      icon: "aw",
      cssName: "Box-Shadow",
    },
    {
      icon: "aw",
      cssName: "Text-Shadow",
    },
    {
      icon: "aw",
      cssName: "Background-Color",
    },
    {
      icon: "aw",
      cssName: "Background-Color",
    },
    {
      icon: "aw",
      cssName: "Background-Color",
    },
    {
      icon: "aw",
      cssName: "Background-Color",
    },
    {
      icon: "aw",
      cssName: "Background-Color",
    },
  ];

  return (
    <section className="w-full flex justify-center items-center md:text-center bg-black text-white pt-8">
      <div className="max-w-[55%]">
        <h2
          className="text-2xl md:text-4xl "
          style={{
            textShadow: "0px 0px 3px #FFFFFF",
          }}
        >
          Favorites
        </h2>
        <div className="md:grid md:grid-cols-3 lg:gap-5 gap-4 md:mt-7 mt-5 place-content-center">
          {favCards.map((card, index) => {
            return (
              <div
                key={index}
                className="rounded-lg lg:w-[200px] bg-red-500 p-3 mt-4 md:mt-0"
              >
                <h3 className="text-3xl">{card.icon}</h3>
                <p>{card.cssName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorite;
