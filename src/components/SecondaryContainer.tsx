import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector(
    (store: RootState) => store.movies?.popularMovies
  );
  const topRated = useSelector((store: RootState) => store.movies?.topRated);
  const upcoming = useSelector((store: RootState) => store.movies?.upcoming);

  return (
    <div className="p-8 bg-black">
      <div className="-mt-24 z-10 relative">
        <MovieList title="Now Playing" data={nowPlayingMovies} />
        <MovieList title="Top Rated" data={topRated} />
        <MovieList title="Popular" data={popularMovies} />
        <MovieList title="Upcoming Movies" data={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
