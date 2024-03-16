import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { AVTAR, LOGO, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { RootState } from "../utils/appStore";
// import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store: RootState) => store.user);
  const isGptSearch = useSelector(
    (store: RootState) => store.gpt.showGptSearch
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
  };
  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e: { target: { value: unknown } }) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsub();
  }, []);

  return (
    <div className="flex fixed w-full z-50 justify-between  bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="" />
      {user && (
        <div className="flex gap-4 p-3">
          <img
            className="w-10 h-12 bg-gradient-to-b from-black"
            src={AVTAR}
            alt=""
          />
          <option value=""></option>
          {isGptSearch && (
            <select
              className="bg-gray-900 text-white p-1 rounded-lg"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {" "}
                  {lang.name}{" "}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-black text-white border-red-600 border p-2 rounded-lg "
            onClick={handleGPTSearch}
          >
            {isGptSearch ? "Home Page" : "GPT Search"}
          </button>

          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
