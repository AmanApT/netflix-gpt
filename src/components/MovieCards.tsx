import React from "react";
import { IMAGE_CDN } from "../utils/constants";
interface CreateProps {
  poster_path: string;
}

const MovieCards: React.FC<CreateProps> = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    <img className="w-44" src={IMAGE_CDN + poster_path} alt="poster-images" />
  );
};

export default MovieCards;
