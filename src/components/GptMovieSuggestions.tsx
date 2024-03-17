import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const { movieNames, movieRecommendation } = useSelector(
    (store: RootState) => store.gpt
  );

  if (!movieNames) return null;

  return (
    <div className="bg-black mt-8">
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
