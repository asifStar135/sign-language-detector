import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import OverLay from "../components/OverLay";

const Home = () => {
  return (
    <div className="isolate px-6 pt-12 lg:px-8">
      <OverLay />
      <div className="mx-auto max-w-[45rem] pt-12 pb-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Disease Prediction !
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Introducing our state-of-the-art Disease Prediction Model powered by
            cutting-edge machine learning technology. Our platform offers a
            quick and accurate assessment of your health based on the symptoms
            you provide. Simply enter your symptoms, and our intelligent system
            will analyze the data to predict potential diseases or health
            conditions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to="/diagnosis"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Have a Diagnosis
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
          <source src="/timeline.MP4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Home;
