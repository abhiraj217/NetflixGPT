import { useSelector } from "react-redux";

const IMG_CDN = "https://image.tmdb.org/t/p/w500";

const GptSearchRecomendation = () => {
  const moviesResultData = useSelector(
    (state) => state.gptSearch.searchedMovies
  );

  if (!moviesResultData || moviesResultData.length === 0) return null;

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-10 bg-black min-h-screen">
      
      {/* Heading */}
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-8">
        Recommended Movies
      </h2>

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {moviesResultData.map((movieArray, index) => {
          const movie = movieArray[0];

          if (!movie) return null;

          return (
            <div
              key={movie.id || index}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {/* Poster */}
              <img
                src={`${IMG_CDN}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[280px] sm:h-[320px] md:h-[350px] object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white text-sm sm:text-base font-semibold line-clamp-2">
                  {movie.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mt-2">
                  ⭐ {movie.vote_average?.toFixed(1)}
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  {movie.release_date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GptSearchRecomendation;