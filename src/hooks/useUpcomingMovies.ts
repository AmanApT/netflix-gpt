import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;
