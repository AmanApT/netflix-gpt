import React from "react";
import MovieCards from "./MovieCards";

interface CreateProps {
  title: string;
  data: null | [];
}

const MovieList: React.FC<CreateProps> = ({ title, data }) => {
  return (
    <div className="text-white">
      <h1 className="text-2xl md:py-2 py-6 px-1 font-bold">{title}</h1>
      <div className="flex gap-4 overflow-x-scroll">
        {data?.map((items: { id: React.Key; poster_path: string }) => (
          <MovieCards key={items.id} poster_path={items.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
