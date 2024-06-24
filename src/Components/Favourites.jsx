import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div style={{fontFamily:"Noticia Text"}}>
      <h1 className="text-center text-white font-bold text-6xl mt-4">Favorites</h1>
      <div className="flex flex-wrap justify-center">
        {favorites.map((item, index) => (
          <div key={index} className="bg-white m-4 p-4 rounded shadow-md w-64 text-center">
            <h2 className="font-bold text-lg">{item.title}</h2>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Visit</a>
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/" className="text-white font-bold">Back to Home</Link>
      </div>
    </div>
  );
}

export default Favorites;
