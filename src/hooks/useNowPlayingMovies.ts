import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { RootState } from "../utils/appStore";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const now_playing = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );
  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    !now_playing && getMovieData();
  }, []);
};

export default useNowPlayingMovies;
