import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllMovies } from "../utils/redux/MoviesSlice";
import Browse from "../components/Browser/Browse";
import TopRatedMovies from "../components/topRatedMovies/TopRatedMovies";
import PopularMovies from "../components/popularMovies/PopularMovies";
import UpcomingMovies from "../components/upcomingMovies/UpcomingMovies";
import GptSearch from "../components/gptSearch/GptSearch";
import Footer from "../components/footer/Footer";

const Maindashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const { users } = useSelector((state) => state.netflixUsers);
  const movies = useSelector((state) => state.moviesList.movies);
  const gptSearchBtnStatus = useSelector((state) => state.gptSearch.searchBtnStatus);

  console.log(movies, "smovies data");
  console.log(users);

  return (
    <section
      className="min-h-screen bg-cover bg-black"
    >
     {
        !gptSearchBtnStatus ? (
        <>
         <div className="absolute inset-0 bg-black/60"></div>
        <Browse />
        <TopRatedMovies />
        <PopularMovies />
        <UpcomingMovies />
        </>
        ):(
          <GptSearch />
        )
}
<Footer />
    </section>
  );
};

export default Maindashboard;