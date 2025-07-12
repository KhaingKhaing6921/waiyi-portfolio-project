import React from 'react'
import './home.css'
import Profile from '../../assets/home/Profile.png'


export default function home() {
  return (
      <div id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 pt-5 pb-0 gap-8 bg-gray-100" >
        {/* Left - Text */}
        <div className="w-full md:w-1/2 md:text-left px-2 md:px-12 lg:px-10 py-12 mt-6 ml-0">
          <p className="text-gray-600 text-xl mb-6">
            Hello there!{" "}
            <span className="inline-block font-bold text-black text-2xl">
            I am{" "}
            <span className="font-bold text-2xl animated-gradient hover:scale-110 transition duration-300 ease-in-out">Waiyi</span>
            </span>
          </p>
          <h1 className="text-5xl sm:text-6xl leading-tight text-gray-900 mb-6 font-bogart font-medium">
            Transforming Ideas <br /> into Products & <br /> Guiding Talent
          </h1>
          <p className="text-gray-800 mt-4 text-base sm:text-lg mb-6 font-body">
            Your product design consultant and guiding talent to build impactful products with design knowledge.
          </p>
          <a
            href="https://cal.com/waiyimonsoe/30min?user=waiyimonsoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium font-body shadow-lg hover:opacity-90 md:text-xl transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            Book a discovery call
            </button>
          </a>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 flex justify-center md:mt-8">
          <img
            src={Profile}
            alt="Waiyi"
            className="w-72 sm:w-80 md:w-full max-w-md object-cover"
          />
        </div>
      </div>
  )
}
