



import { useState } from "react";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import Navbar from "./components/Navbar";
import movies from "./data/movies";

function App() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [darkMode, setDarkMode] = useState(false);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="controls">
        <SearchBar search={search} setSearch={setSearch} />

        <GenreFilter
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;

