import React from "react";
import { Link } from "react-router-dom";
import error from "../../../public/404.gif"

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full h-screen">
      {/* <Lottie animationData={errorAnimation} loop={true} /> */}
      <img src={error} className="h-80" alt="" />
        <div className="flex flex-col items-center justify-center">
          <p className="mt-12 text-3xl text-gray-800 md:text-4xl lg:text-5xl">
            Page Not Found
          </p>
          <p className="mt-8 text-gray-600 md:text-lg lg:text-xl">
            Sorry, the page you are looking for could not be found.
          </p>
          <Link
            to={'/'}
            className="inline-flex items-center gap-2 mt-8 btn-primary"
            title="Return Home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
