import { useState } from "react";

const MovieCard = ({ movie }) => {
  const [added, setAdded] = useState(false);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);

    return "⭐".repeat(fullStars);
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
          <span className="genre">{movie.genre}</span>
          <span className="rating">{renderStars(movie.rating)}</span>
        </div>

        <p>{movie.description}</p>

        <button
          className={`watchlist-btn ${added ? "added" : ""}`}
          onClick={() => setAdded(!added)}
        >
          {added ? "Added" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
