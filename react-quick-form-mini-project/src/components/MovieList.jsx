function MovieList({ movies, selectedMovie, onChange, error }) {
  return (
    <div className="input-container">
      <p className="font-medium">Your Favorite movie :</p>
      {movies.map((movie) => (
        <label key={movie.title} className="block">
          <input
            type="radio"
            name="option"
            value={movie.title}
            checked={selectedMovie === movie.title}
            onChange={(event) => onChange(event.target.value)}
          />
          <span>
            Movie: {movie.title} || Year: {movie.year} || Director:{" "}
            {movie.director}
          </span>
        </label>
      ))}
      <p className="show-message">Selected: {selectedMovie || "None"}</p>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default MovieList;
