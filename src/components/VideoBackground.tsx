import { RootState } from "../utils/appStore";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

interface createProps {
  id: number;
}

const VideoBackground: React.FC<createProps> = ({ id }) => {
  useMovieTrailer(id);
  const movieTrailer = useSelector(
    (store: RootState) => store.movies?.trailerVideo
  );

  return (
    <div className="z-50">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&mute=1&rel=0`}
        // allow='autoplay'
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; "
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
