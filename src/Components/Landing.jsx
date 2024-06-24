import React from "react";
import Card from "./Card";

function Landing() {
  return (
    <div>
      <h1 className="text-center font-bold text-6xl mt-4">NewsNest</h1>
      <h1 className="font-bold text-sm sm:text-xl text-center mt-5">Top Kannada Newspapers</h1>
      <div className="flex flex-wrap justify-center">
      <Card title="Vijayavani" url="https://epapervijayavani.in/"  />
      <Card title="Prajavani" url="https://www.prajavani.net/"  />
      <Card title="Vishwavani" url="https://vishwavani.news/"  />
      </div>
      <h1 className="font-bold text-sm sm:text-xl text-center mt-5">Top Kannada Magazines</h1>
      <div className="flex flex-wrap justify-center">
      <Card title="Mayura" url="http://www.mayuraezine.com/"  />
      <Card title="Sudha" url="http://sudhaezine.com/"  />
      <Card title="TattvaVada" url="https://www.tatvavada.org/magazines/tatvavada/kan/"  />
      </div>
    </div>
  );
}

export default Landing;
