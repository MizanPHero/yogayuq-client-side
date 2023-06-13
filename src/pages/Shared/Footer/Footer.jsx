import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import yogayuq from "../../../assets/hemp-logo_727906-14 (2).png";
import {
  faTwitter,
  faFacebookSquare,
  faDribbble,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative pt-8 pb-6 my-container bg-blueGray-200">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-4/12">
            <Link to="/" className="items-center flex-1 inline-block">
              <img className="h-8" src={yogayuq} alt="" />
              <span className="text-2xl font-bold tracking-wide text-gray-800">
               Yogayuq
              </span>
            </Link>
            <h5 className="mt-0 mb-2 text-lg text-blueGray-600">
              Where Imagination Meets Action
            </h5>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-red-600 uppercase">
                  Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href="#"
                    >
                      Terms & Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Return Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Home Delivery
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-red-600 uppercase">
                  Courses
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Yoga Fundamentals
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Advanced Asanas
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Meditation Techniques
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Yoga for Stress Relief
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full px-4 lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-red-600 uppercase">
                  Your Path to Wellness
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="block pb-2 text-sm italic font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Health Articles
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm italic font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Nutritional Tips
                    </a>
                  </li>
                  <li>
                    <a
                      className="block pb-2 text-sm italic font-semibold text-blueGray-600 hover:text-blueGray-800"
                      href=""
                    >
                      Mindfulness Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <h1 className="block mb-2 text-sm font-semibold text-center text-red-600 uppercase">
              Find Us on Social Media
            </h1>
            <div className="mt-6 mb-6 text-center lg:mb-0">
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-bold bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-bold bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faFacebookSquare} />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-bold text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faDribbble} />
              </button>
              <button
                className="items-center justify-center w-10 h-10 mr-2 font-bold bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
                type="button"
              >
                <FontAwesomeIcon icon={faGithub} />
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="w-full px-4 mx-auto text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-blueGray-500">
              Copyright ©{" "}
              <span id="get-current-year">{new Date().getFullYear()}</span>
              <a
                href=""
                className="text-blueGray-500 hover:text-gray-800"
                target="blank"
              >
                {" "}
                Yogayuq by
              </a>
              <br />
              <a href="" className="text-blueGray-500 hover:text-blueGray-800">
                Mizanur Rahman
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
