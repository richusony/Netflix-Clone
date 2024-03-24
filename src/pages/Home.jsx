import React, { useContext, useState } from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";
import VideoContext from "../context/videoContext";
import YouTube from "react-youtube";
import { AiOutlineClose } from "react-icons/ai";

const Home = () => {
  const { videoId, setVideoId } = useContext(VideoContext);

  return (
    <>
      {videoId ? (
        <div className="h-screen overflow-hidden">
          <div className="mx-auto md:w-1/2 h-full flex flex-col text-start justify-center items-start">
            <h2
              onClick={() => setVideoId(null)}
              className="transition delay-150 ease-linear mb-3 px-2 py-2 text-white text-2xl font-nsans-bold cursor-pointer w-fit hover:bg-white hover:text-black rounded-full"
            >
              <AiOutlineClose />
            </h2>
            <div className=""><YouTube className="" videoId={videoId} /></div>
          </div>
        </div>
      ) : (
        <>
          <Hero />
          <MovieRow title="upcoming" url={endpoints.upcoming} />
          <MovieRow title="trending" url={endpoints.trending} />
          <MovieRow title="top rated" url={endpoints.topRated} />
          <MovieRow title="comedy" url={endpoints.comedy} />
          <MovieRow title="popular" url={endpoints.popular} />
        </>
      )}
    </>
  );
};

export default Home;
