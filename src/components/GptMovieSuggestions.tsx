import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { movieNames, movieRecommendation } = useSelector(
    (store: RootState) => store.gpt
  );

  if (!movieNames) return;
  <>
    <div className="bg-black">
      <h1 className="text-6xl text-white">Ruko bhai data aane do</h1>
    </div>
  </>;

  return (
    <div className="bg-black mt-8 px-8">
      {movieNames.map((eachMovie: string, index) => (
        <MovieList
          key={eachMovie}
          title={eachMovie}
          data={movieRecommendation[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
