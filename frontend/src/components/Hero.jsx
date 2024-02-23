import React from "react";
import { useEffect } from "react";
import oculist from "../assets/oculist_2.jpg";
import check from "../assets/1.jpg";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Hero() {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div className="font-inter">
      <section className="relative transition-all duration-300 ease-in-out">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-4xl font-inter md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Predict Retinal Diseases using
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Deep Learning
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Revolutionizing the treatment of retinal diseases through
                  cutting-edge deep learning technology empowering healthcare
                  professionals and patients alike to make informed decisions
                  about eye health.
                </p>
              </div>
              <div
                className="flex justify-center space-x-4 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-4 w-full mb-4 sm:w-auto sm:mb-0">
                  Learn More
                </button>
                <button className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 py-2 px-6 rounded">
                  Sign Up
                </button>
              </div>
            </div>
            <img
              src={oculist}
              data-aos="zoom-y-out"
              data-aos-delay="300"
              className="w-[500px] mx-auto"
            />
          </div>
          <div
            data-aos="zoom-y-out"
            className="font-inter flex font-bold justify-center space-x-4 "
          >
            <h1 className="text-4xl">Experience Yourself</h1>
          </div>
          <div className=" my-5 max-w-3xl mx-auto font-inter flex justify-center text-center space-x-4 ">
            <p
              data-aos="zoom-y-out"
              className="text-lg mx-20 text-gray-600 mb-8"
            >
              Ready to take control of your eye health? Sign up now to
              experience the benefits of our retinal disease prediction system
              firsthand.
            </p>
          </div>

          <div className="my-5 max-w-3xl mx-auto font-inter flex justify-center text-center space-x-4">
            <button
              onClick={()=>{

                (userLoggedIn ?  navigate('/predict') : navigate('/signup'))
              
              }}
              data-aos="zoom-y-out"
              className="  text-white  bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-6 w-full mb-4 sm:w-auto sm:mb-0"
            >
              Predict
            </button>
          </div>

          <div
            data-aos="zoom-y-out"
            data-aos-delay="300"
            className=" mx-auto m-b"
          ></div>
        </div>
      </section>
    </div>
  );
}
