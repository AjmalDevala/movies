import { useEffect, useState } from "react";
import useHead from "@/hooks/useHead";

const Search = () => {
  useHead("Search");

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]); // Ensure movies is initialized as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.themoviedb.org/3/discover/movie")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results || []); // Ensure data.results is an array
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch movies");
        setLoading(false);
      });
    // setMovies(movies);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div className="flex bg-[#9ca3af1a] items-center px-6 py-4 gap-3 sticky">
        <div className="i-ph-magnifying-glass text-xl opacity-50"></div>
        <input
          type="text"
          className="text-2xl bg-transparent outline-none w-full"
          placeholder="Type to search..."
          autoFocus={true}
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <div className="text-4xl p-10 opacity-50 text-center">
        {loading
          ? "Loading..."
          : query
            ? `Results for: "${query}"`
            : "Type something to search..."}
      </div>
      <div>
        {error && <div className="text-red-500">{error}</div>}
        {!loading && filteredMovies.length === 0 && query && (
          <div className="text-4xl p-10 opacity-50 text-center">
            No movies available
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {filteredMovies.map((movie) => (
            <div key={movie?.id} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt={movie?.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <div className="text-lg font-semibold">{movie?.title}</div>
              <div className="text-sm opacity-75">{movie?.release_date}</div>
              <div className="text-sm">{movie?.vote_average} / 10</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
