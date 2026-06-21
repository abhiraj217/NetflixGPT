import { useRef } from "react";
import { groq } from "../../utils/Groq";
import { options } from "../../utils/Options";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../../utils/redux/GptSearchSlice";

const GptSearchField = () => {
  const dispatch = useDispatch();
  const movieSearch = useRef(null);

  const searchMovieData = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );

    const data = await response.json();

    return data.results; // FIXED
  };

  const handleformSubmit = async () => {
    try {
      const query = movieSearch.current.value;

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a movie recommendation system. Suggest 5 movies only, comma separated. Don't give year.",
          },
          {
            role: "user",
            content: query,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

      const moviesSearchedResult =
        completion?.choices[0]?.message?.content
          .split(",")
          .map((movie) => movie.trim());

      console.log(moviesSearchedResult);

      const apiMovieData = moviesSearchedResult.map((movie) =>
        searchMovieData(movie)
      );

      const tmdbMoviesResult = await Promise.all(apiMovieData);

      console.log(tmdbMoviesResult, "tmdb movies result");

      dispatch(addGptMovieResult(tmdbMoviesResult));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center pt-28 px-4 z-30">
      <div className="w-full max-w-4xl">
        <form
          className="flex items-center gap-4 bg-black/80 p-4 rounded-lg shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleformSubmit();
          }}
        >
          <input
            ref={movieSearch}
            type="text"
            placeholder="What would you like to watch today?"
            className="flex-1 px-6 py-4 rounded-md bg-zinc-900 text-white text-lg outline-none border border-gray-700 focus:border-red-600 placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchField;