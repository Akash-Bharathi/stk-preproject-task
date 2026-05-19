const GenreFilter = ({ selectedGenre, setSelectedGenre }) => {
  return (
    <select
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
      className="genre-filter"
    >
      <option value="All">All Genres</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Adventure">Adventure</option>
      <option value="Drama">Drama</option>
      <option value="Action">Action</option>
      <option value="Thriller">Thriller</option>
      <option value="Musical">Musical</option>
      <option value="Western">Western</option>
    </select>
  );
};

export default GenreFilter;