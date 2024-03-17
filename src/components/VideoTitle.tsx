interface createProps {
  title: string;
  overview: string;
}
const VideoTitle: React.FC<createProps> = ({ title, overview }) => {
  return (
    <div className="flex absolute z-10  justify-center pl-8 aspect-video  text-white flex-col gap-2 bg-gradient-to-r from-black">
      <h1 className="font-bold  md:text-6xl text-3xl">{title}</h1>
      <p className="md:text-lg text-sm py-6 sm:w-1/3">{overview}</p>
      <div className="flex gap-2 ">
        <button className="bg-white rounded-lg text-black md:text-xl  hover:bg-opacity-80 px-6 py-2 md:px-12 md:py-4">
          Play
        </button>
        <button className="bg-gray-500 rounded-lg text-white md:text-xl bg-opacity-50 px-6 py-2 md:px-12 md:py-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
