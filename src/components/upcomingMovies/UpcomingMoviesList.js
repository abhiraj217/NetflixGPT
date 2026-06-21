import { getUpcomingMovies } from "../../utils/redux/MoviesSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UpcomingMovie from "./UpcomingMovie";

const UpcomingMoviesList = () => {
  const upcomingMoviesListData = useSelector(
    (state) => state.moviesList.upcomingMovies
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  if (!upcomingMoviesListData || upcomingMoviesListData.length === 0)
    return null;

  return (
    <section className="py-4 sm:py-6">
      {/* Heading */}
      <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        Upcoming Movies
      </h2>

      {/* Slider */}
      <div
        className="
          flex gap-3 sm:gap-4 md:gap-5
          overflow-x-auto overflow-y-hidden
          scrollbar-hide
          scroll-smooth
          snap-x snap-mandatory
          pb-2
        "
      >
        {upcomingMoviesListData.map((movie) => (
          <div key={movie.id} className="snap-start">
            <UpcomingMovie posterPath={movie.poster_path} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingMoviesList;