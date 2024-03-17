import { useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    const emailVal = email.current?.value || "";
    const passVal = password.current?.value || "";
    const nameVal = name.current?.value || "";
    const returnVal = validation(emailVal, passVal, nameVal);

    if (!isSignUp && returnVal === "Please enter a valid name") {
      setErrorMessage(null);
    } else {
      setErrorMessage(returnVal);
    }

    if (errorMessage) {
      return;
    }

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, emailVal, passVal)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameVal,
          })
            .then(() => {
              const { uid, email, displayName } = user;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailVal, passVal)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className=" bg-login-bg bg-cover h-[100vh]">
      <Header />
      <div className="flex flex-col items-center p-36 md:p-24">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="lg:w-4/12 flex flex-col bg-black bg-opacity-90 text-white py-6 px-12 rounded-md"
        >
          <h1 className="font-bold py-4 text-3xl">
            {" "}
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>
          {isSignUp ? (
            <input
              ref={name}
              className="p-4 my-2 bg-slate-600 rounded-md bg-opacity-70 "
              type="text"
              placeholder="Full Name"
            />
          ) : (
            <></>
          )}

          <input
            ref={email}
            className="p-4 my-2 bg-slate-600 rounded-md bg-opacity-70 "
            type="text"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-4 my-2 bg-slate-600 rounded-md bg-opacity-70 "
            type="password"
            placeholder="Password"
          />
          <p className="text-red-500 py-1 text-lg ">{errorMessage}</p>
          <button
            onClick={handleFormSubmit}
            className="p-4 my-2 rounded-md bg-red-600 font-bold text-lg"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p onClick={toggleSignUp} className="my-8 cursor-pointer">
            {" "}
            <span className="text-gray-500">
              {isSignUp ? "Already Registered ?" : "New to netflix"}
            </span>{" "}
            {isSignUp ? "Sign In Here" : "Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Netflix@Gpt123
