import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Landing() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (title, url) => {
    const newFavorites = [...favorites, { title, url }];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  return (
    <div>
      <h1 className="text-center text-white font-bold text-6xl mt-4">NewsNest</h1>
      <h1 style={{fontFamily:"Noticia Text"}} className=" font-bold text-white text-sm sm:text-3xl text-center mt-5">Top Kannada Newspapers</h1>
      <div className="flex flex-wrap justify-center">
        <Card title="Vijayavani" url="https://epapervijayavani.in/" addToFavorites={addToFavorites} />
        <Card title="Prajavani" url="https://www.prajavani.net/" addToFavorites={addToFavorites} />
        <Card title="Vishwavani" url="https://vishwavani.news/" addToFavorites={addToFavorites} />
      </div>
      <h1 style={{fontFamily:"Noticia Text"}} className="font-bold text-white text-sm sm:text-3xl text-center mt-5">Top Kannada Magazines</h1>
      <div className="flex flex-wrap justify-center">
        <Card title="Mayura" url="http://www.mayuraezine.com/" addToFavorites={addToFavorites} />
        <Card title="Sudha" url="http://sudhaezine.com/" addToFavorites={addToFavorites} />
        <Card title="TattvaVada" url="https://www.tatvavada.org/magazines/tatvavada/kan/" addToFavorites={addToFavorites} />
      </div>
      <div className="text-center mt-5">
        <Link to="/favorites" className="text-white font-bold">Go to Favorites</Link>
      </div>
    </div>
  );
}

export default Landing;
