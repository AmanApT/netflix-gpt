import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { RootState } from "../utils/appStore";
import { useRef } from "react";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addRecommendedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const currentLang = useSelector(
    (store: RootState) => store.config.lang
  ) as keyof typeof lang;

  // infer the type of lang automatically

  const searchText = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const searchMovieTmdb = async (movie: string) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    if (searchText.current) {
      const gptQuery =
        "Act as a Movie Recommendation System and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated like the example result given ahead. Example : Movie1, Movie2, Movie3, Movie4, Movie5  ";

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const resultArr = response.text().split(",");

      console.log(resultArr);

      const promiseArr = resultArr.map((eachMovie) =>
        searchMovieTmdb(eachMovie)
      );
      const MovieRecommendations = await Promise.all(promiseArr);
      dispatch(
        addRecommendedMovies({
          movieNames: resultArr,
          movieRecommendation: MovieRecommendations,
        })
      );
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="sm:w-1/2 bg-black grid grid-cols-12"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          required
          className="p-2 m-4 col-span-9"
          type="text"
          placeholder={lang[currentLang].searchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[currentLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
