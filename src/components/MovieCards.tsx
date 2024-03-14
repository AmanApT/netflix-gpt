import React from "react";
import { IMAGE_CDN } from "../utils/constants";
interface CreateProps {
  poster_path: string;
}

const MovieCards: React.FC<CreateProps> = ({ poster_path }) => {
  //   console.log(poster_path);

  return (
    // <div className="">
    <img className="w-44" src={IMAGE_CDN + poster_path} alt="poster-images" />
    // </div>
  );
};

export default MovieCards;
