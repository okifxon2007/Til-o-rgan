import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const nav = useNavigate();

  function handlehome() {
    nav('/');
  }

  function handleabout() {
    nav('/about');
  }
  function handleruslugat() {
    nav('/ruslugat');
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 shadow-lg flex flex-col md:flex-row justify-between items-center">
      <h1
        className="text-4xl font-extrabold mb-4 md:mb-0 tracking-wide drop-shadow-lg cursor-pointer"
        onClick={handlehome}
      >
        Lug'at game
      </h1>

      <div className="flex gap-6 md:gap-10">
        <button
          className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleruslugat}
        >
          Rus-tili lug'at
        </button>

        <button
          className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105"
          onClick={handleabout}
        >
          Lug'at Game
        </button>
      </div>
    </div>
  );
};

export default Header;
