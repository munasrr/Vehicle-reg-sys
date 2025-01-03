import React from "react";
import car from "../assets/cars.png";
import { Link } from "react-router-dom";

const Heropage = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 container">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-8 py-8 lg:py-16">
        {/* Text Content */}
        <div className="relative space-y-8 w-full lg:w-1/2 text-center lg:text-left">
          {/* Decorative element */}
          <div className="lg:block -top-4 -left-4 absolute hidden bg-red-50 opacity-50 rounded-full w-20 h-20"></div>

          <div className="relative">
            <span className="inline-block mb-4 font-semibold text-[#EA3C3C] text-sm uppercase tracking-wider">
              Revolutionizing Vehicle Registration
            </span>
            <h1 className="font-bold font-Poppins text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Transform Your
              <span className="block relative mt-3 text-[#EA3C3C]">
                Registration Experience
              </span>
            </h1>

            <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-gray-600 text-lg sm:text-xl leading-relaxed">
              Step into the future of vehicle registration with our
              <span className="font-medium text-[#EA3C3C]">
                {" "}
                state-of-the-art digital platform
              </span>
              . Where efficiency meets elegance, and convenience becomes
              extraordinary.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col justify-center lg:justify-start sm:space-x-6 space-y-4 sm:space-y-0 mt-8">
            <Link
              to="/signup"
              className="relative bg-[#EA3C3C] hover:shadow-lg hover:shadow-red-200 px-8 py-4 rounded-lg font-semibold text-white transform transition-all hover:-translate-y-1 duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Register Now</span>
              <div className="group-hover:scale-x-100 absolute inset-0 bg-gradient-to-r from-[#ff4d4d] to-[#EA3C3C] transform origin-left transition-transform duration-300 scale-x-0"></div>
            </Link>
            <Link
              to="/about"
              className="relative border-2 border-gray-800 hover:shadow-lg px-8 py-4 rounded-lg font-semibold text-gray-800 transition-all duration-300 overflow-hidden group"
            >
              Learn More
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1 duration-300">
                →
              </span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8 border-gray-100 mt-12 px-4 pt-8 border-t">
            <div className="flex flex-col items-center hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 group">
              <span className="group-hover:text-3xl font-bold text-[#EA3C3C] text-2xl transition-all duration-300">
                24/7
              </span>
              <span className="mt-2 font-medium text-center text-gray-600 text-xs">
                Expert
                <br />
                Assistance
              </span>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 group">
              <span className="group-hover:text-3xl font-bold text-[#EA3C3C] text-2xl transition-all duration-300">
                100%
              </span>
              <span className="mt-2 font-medium text-center text-gray-600 text-xs">
                Guaranteed
                <br />
                Safety
              </span>
            </div>
            <div className="flex flex-col items-center hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 group">
              <span className="group-hover:text-3xl font-bold text-[#EA3C3C] text-2xl transition-all duration-300">
                10K+
              </span>
              <span className="mt-2 font-medium text-center text-gray-600 text-xs">
                Happy
                <br />
                Customers
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2">
          <div className="relative">
            {/* Background circle/blob for visual interest */}
            <div className="absolute inset-0 bg-red-50 opacity-20 blur-3xl rounded-full animate-pulse filter"></div>
            <img
              src={car}
              alt="Vehicle Registration"
              className="relative mx-auto w-full max-w-xl h-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Feature Cards - Enhanced & Centered */}
      <div className="mx-auto max-w-5xl">
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-16 px-4">
          <div className="bg-white hover:bg-[#EA3C3C] shadow-md hover:shadow-xl p-8 rounded-xl transition-all duration-300 group">
            <div className="group-hover:text-white mb-4 font-semibold text-[#EA3C3C] text-2xl">
              Swift & Seamless
            </div>
            <p className="group-hover:text-white/90 text-gray-600">
              Experience lightning-fast registration process with our
              state-of-the-art digital platform
            </p>
          </div>

          <div className="bg-white hover:bg-[#EA3C3C] shadow-md hover:shadow-xl p-8 rounded-xl transition-all duration-300 group">
            <div className="group-hover:text-white mb-4 font-semibold text-[#EA3C3C] text-2xl">
              Fort Knox Security
            </div>
            <p className="group-hover:text-white/90 text-gray-600">
              Your data is protected with bank-grade encryption and advanced
              security protocols
            </p>
          </div>

          <div className="bg-white hover:bg-[#EA3C3C] shadow-md hover:shadow-xl p-8 rounded-xl transition-all duration-300 group">
            <div className="group-hover:text-white mb-4 font-semibold text-[#EA3C3C] text-2xl">
              24/7 Expert Support
            </div>
            <p className="group-hover:text-white/90 text-gray-600">
              Our dedicated team of experts is always ready to assist you around
              the clock
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
