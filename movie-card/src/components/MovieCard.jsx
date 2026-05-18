import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [added, setAdded] = useState(false);

  const handleWatchlist = () => {
    setAdded(!added);
  };

  return (
    <div className="movie-card">
      <img
        src={movie.image}
        alt={movie.title}
        className="movie-image"
      />

      <div className="movie-content">
        <h2>{movie.title}</h2>

        <div className="movie-info">
          <span>{movie.genre}</span>
          <span>⭐ {movie.rating}</span>
        </div>

        <p>{movie.description}</p>

        <button
          className={`watchlist-btn ${added ? "added" : ""}`}
          onClick={handleWatchlist}
        >
          {added ? "Added to Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;