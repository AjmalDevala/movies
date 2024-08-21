import React from "react";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "Interstellar",
    description: "A journey beyond the stars.",
    image: "https://via.placeholder.com/300x400",
  },
  {
    title: "The Dark Knight",
    description: "The rise of a hero in Gotham City.",
    image: "https://via.placeholder.com/300x400",
  },
];

const MovieLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage: `url("/movielandingpage.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MovieZone</h1>
          <p className="text-xl mb-6">
            Your ultimate destination for movie trailers and reviews
          </p>
          <button onClick={() => navigate("/")} className="gdbutton">
            Explore Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MovieZone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MovieLandingPage;
