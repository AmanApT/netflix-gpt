import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="h-[100vh] bg-login-bg bg-cover">
      <Header />
      <div className="flex flex-col items-center ">
        <form className="lg:w-4/12 flex flex-col bg-black bg-opacity-90 text-white py-10 px-12 rounded-md">
          <h1 className="font-bold py-4 text-3xl">Sign In </h1>
          <input
            className="p-4 my-2 bg-slate-600 rounded-md bg-opacity-70 "
            type="text"
            placeholder="Email"
          />
          <input
            className="p-4 my-2 bg-slate-600 rounded-md bg-opacity-70 "
            type="password"
            placeholder="Password"
          />
          <button className="p-4 my-2 rounded-md bg-red-600 font-bold text-lg">
            Sign In
          </button>
          <p className="my-8">
            {" "}
            <span className="text-gray-500">New to Netflix?</span> Sign up now.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
