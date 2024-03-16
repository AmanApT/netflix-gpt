import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { RootState } from "../utils/appStore";

const GptSearchBar = () => {
  const currentLang = useSelector(
    (store: RootState) => store.config.lang
  ) as keyof typeof lang;

  // infer the type of lang automatically

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="sm:w-1/2 bg-black grid grid-cols-12" action="">
        <input
          className="p-2 m-4 col-span-9"
          type="text"
          placeholder={lang[currentLang].searchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[currentLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
