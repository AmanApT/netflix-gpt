interface createProps {
  title: string;
  overview: string;
}
const VideoTitle: React.FC<createProps> = ({ title, overview }) => {
  return (
    <div className="flex absolute justify-center pl-8 aspect-video w-screen  text-white flex-col gap-2 bg-gradient-to-r from-black">
      <h1 className="font-bold  text-6xl">{title}</h1>
      <p className="text-lg py-6 sm:w-1/3">{overview}</p>
      <div className="flex gap-2 bg">
        <button className="bg-white rounded-lg text-black text-xl hover:bg-opacity-80 px-12 py-4">
          Play
        </button>
        <button className="bg-gray-500 rounded-lg text-white text-xl bg-opacity-50 px-12 py-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
