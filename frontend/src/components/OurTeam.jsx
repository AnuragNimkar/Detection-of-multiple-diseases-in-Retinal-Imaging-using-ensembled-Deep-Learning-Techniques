import React from "react";

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="w-64 mx-auto mb-8 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 pt-6">
        <img
          src={image}
          alt={`Display Picture of ${name}`}
          className="mx-auto w-20 h-20 rounded-full"
        />
        <h1 className="text-xl font-bold text-center mt-4">{name}</h1>
        <p className="text-gray-600 text-center mt-2">{role}</p>
        <p className="text-sm text-gray-700 text-center mt-4">
          The CEO's role in raising a company's corporate IQ is to establish an
          atmosphere that promotes knowledge sharing and collaboration.
        </p>
      </div>
      <div className="flex justify-center pb-6">
        <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            />
          </svg>
        </a>
        <a href="#" className="mx-2 text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const OurTeam = () => {
  return (
    <div className="mt-35">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
          >
            <TeamMember
              name="Andres Berlin"
              role="Chief Executive Officer"
              image="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
            />
            {/* Add more TeamMember components for other team members */}
            <TeamMember
              name="Andres Berlin"
              role="Chief Executive Officer"
              image="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
            />
            <TeamMember
              name="Andres Berlin"
              role="Chief Executive Officer"
              image="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
            />
            <TeamMember
              name="Andres Berlin"
              role="Chief Executive Officer"
              image="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
