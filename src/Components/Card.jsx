import React from 'react';

function Card({ title, url, addToFavorites }) {
  return (
    <div style={{fontFamily:"Noticia Text"}} className="flex flex-wrap justify-center mt-10 ">
      <div className="p-4 max-w-sm">
        <div className="flex rounded-lg h-full dark:bg-gray-700  p-8 flex-col">
          <div className="mb-3">
            <h2 className="text-center text-white dark:text-white font-medium">
              {title}
            </h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div className="container">
              <iframe
                src={url}
                frameBorder="0"
                title={title}
                className="w-full h-64"
              ></iframe>
            </div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
            >
              Visit Website
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button
              onClick={() => addToFavorites(title, url)}
              className="mt-3 bg-gray-500 text-white p-2 rounded"
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
