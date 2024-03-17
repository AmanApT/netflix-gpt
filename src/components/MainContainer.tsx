import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

const MainContainer = () => {
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );

  if (!movies) return;

  const mainMovie = movies[0];
  //   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative top-32 md:top-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
