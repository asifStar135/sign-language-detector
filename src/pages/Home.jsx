import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import OverLay from "../components/OverLay";
import timeline from "../assets/timeline.MP4";

const Home = () => {
  return (
    <div className="isolate px-6 pt-12 lg:px-8">
      <OverLay />
      <div className="mx-auto max-w-[45rem] pt-12 pb-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Sign Language Detection
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing the <strong>Sign Language Detector</strong> that aims to
            bridge the communication gap between sign language users and
            non-sign language users. By leveraging advanced machine learning and
            computer vision techniques, our application can recognize and
            translate sign language gestures into text or speech in real-time.
            This project is designed to facilitate seamless communication and
            promote inclusivity, making interactions smoother and more efficient
            for everyone involved.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/detection"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {"Detect Sign Language"}
            </NavLink>
            <NavLink
              to="/about"
              className="flex items-center text-sm font-semibold text-gray-900 border rounded-lg border-gray-300 py-2.5 px-5"
            >
              Learn more{" "}
              <ArrowRightIcon className="text-gray-600 ml-3 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Project Timeline
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            Understand how the project works
          </div>
        </div>

        {/* time  video player */}
        <video
          class="w-full md:w-3/4 mx-auto h-auto rounded-lg"
          autoPlay={true}
          loop={true}
          controls={false}
          muted={true}
        >
          <source src={timeline} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
