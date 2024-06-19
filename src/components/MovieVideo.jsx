import { useRef } from "react";
import LeftAndRightScrollFeature from "./LeftAndRightScrollFeature";
import useMovieVideos from "../hooks/useMovieVideos";

const MovieVideo = () => {
  const videoRef = useRef();
  const videoPlayer = useRef();
  const { movieVideos, videoKey, handleCloseVideo, playVideo } =
    useMovieVideos(videoPlayer);
  if (!movieVideos) return null;

  return (
    <div className="max-w-[1200px] w-full mx-auto dark:text-slate-200 text-slate-900  md:px-0 px-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-bold">
          Videos ({movieVideos.length})
        </h1>
        {movieVideos.length > 3 && (
          <LeftAndRightScrollFeature reference={videoRef} />
        )}
      </div>
      <div
        ref={videoRef}
        className="flex overflow-x-scroll scroll-smooth scrollbar-hide"
      >
        <div className="flex gap-5">
          {movieVideos.map((video) => (
            <div key={video.id} className="md:w-[380px] w-[280px] space-y-2">
              <div className="md:w-[380px] md:h-[230px] w-[280px] h-[170px] relative ">
                <iframe
                  className="rounded-lg w-full h-full"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div
                  onClick={() => playVideo(video.key)}
                  className="bg-black hover:bg-opacity-40 w-full h-full absolute top-0 rounded-lg bg-opacity-50 cursor-pointer"
                ></div>
              </div>
              <p
                onClick={() => playVideo(video.key)}
                className="md:text-lg font-semibold cursor-pointer"
              >
                <span className="dark:text-slate-100 text-slate-900 font-bold">
                  {video.type + " - "}
                </span>
                <span className="dark:text-slate-300 text-slate-700">
                  {video.name}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        ref={videoPlayer}
        onClick={handleCloseVideo}
        className="w-full h-full fixed top-[-15px] left-0 bg-black z-[100] bg-opacity-75 hidden flex-col items-center justify-center"
      >
        <div className="space-y-2">
          <iframe
            className="md:rounded-lg  md:w-[70vw] w-[100vw] md:h-[40vw] h-[60vw]"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <i  className="fa-solid fa-xmark text-4xl absolute top-[0.5%] right-[3%] cursor-pointer px-[14px] hover:text-slate-800 transition-all duration-300 text-white py-2 rounded-full hover:bg-white" />
        </div>
      </div>
    </div>
  );
};

export default MovieVideo;
