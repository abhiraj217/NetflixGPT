import { useSelector, useDispatch } from "react-redux";
import Video from "./Video";
import VidoeTitle from "./VideoTitle";
import { useEffect } from "react";
import { getMainMovie } from "../../utils/redux/MoviesSlice";

const Browse = () => {
  const data = useSelector((state) => state.moviesList.movies);
  const dataVideo = useSelector((state) => state.moviesList.mainMovieVideos);
  const dispatch = useDispatch();

  const { title, overview, id } = data?.[0] || {};

  useEffect(() => {
    if (id) {
      dispatch(getMainMovie(id));
    }
  }, [id, dispatch]);

  if (!data || data.length === 0) return null;

  const trailerVideo = dataVideo?.filter(
    (video) => video.type === "Trailer"
  );

  const trailerKey = trailerVideo?.[0]?.key;

  return (
    <div className="relative w-full h-[80vh] sm:h-screen overflow-hidden">
      {trailerKey && <Video keyValue={trailerKey} />}
      <VidoeTitle title={title} overview={overview} />
    </div>
  );
};

export default Browse;