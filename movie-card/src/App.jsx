import React from "react";
import MovieCard from "./components/MovieCard";
import "./style.css";

function App() {
  const movie = {
    title: "Inception",
    genre: "Sci-Fi / Thriller",
    rating: "8.8/10",
    description:
      "A skilled thief enters people's dreams to steal secrets, but his latest mission may change everything.",
    image:
      "https://i.pinimg.com/1200x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg",
  };

  return (
    <div className="app">
      <MovieCard movie={movie} />
    </div>
  );
}

export default App;