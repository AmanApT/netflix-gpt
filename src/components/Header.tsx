import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { AVTAR, LOGO } from "../utils/constants";

interface RootState {
  user: User;
}

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store: RootState) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch(() => {
        navigate("/error");
      });
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
    <div className="flex fixed w-full z-10 justify-between  bg-gradient-to-b from-black">
      <img className="w-44" src={LOGO} alt="" />
      {user && (
        <div className="flex gap-4 p-2">
          <img
            className="w-10 h-12 bg-gradient-to-b from-black"
            src={AVTAR}
            alt=""
          />

          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
