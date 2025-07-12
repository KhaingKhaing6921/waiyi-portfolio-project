import React from "react";
import { FaLinkedin, FaBehance, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-gray-900">
      {/* Call to Action */}
      <div className="px-6 md:px-20 py-16 text-left">
        <h2 className="text-5xl md:text-7xl font-medium font-bogart mb-4">Ready to connect?</h2>
        <p className="text-gray-600 text-xl mb-8 font-body">Let’s create something extraordinary together!</p>
        <div className="flex flex-col md:flex-row justify-left gap-4">
          <a
            href="https://cal.com/waiyimonsoe/30min?user=waiyimonsoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium font-body shadow-lg hover:opacity-90 md:text-xl transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            Book a call to discuss your needs
            </button>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=waiyi.monsoe@gmail.com&tf=cm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 w-45 md:px-6 rounded-2xl border border-pink-400 text-gray-900 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 md:w-50 md:text-lg md:py-4 font-body"
          > 
            Send an email
          </a>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="bg-stone-600 text-gray-100 px-6 md:px-20 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-4">
          <nav className="flex flex-wrap gap-6 text-lg md:text-xl underline underline-offset-4 font-body">
            <a href="#home" className="hover:text-pink-400">I am Wai Yi</a>
            <a href="#about" className="hover:text-pink-400">About</a>
            <a href="#portfolio" className="hover:text-pink-400">Portfolio</a>
            <a href="#contact" className="hover:text-pink-400">Contact</a>
          </nav>
          <div className="flex gap-4 md:text-4xl text-2xl">
            <a 
            href="https://www.linkedin.com/in/waiyimonsoe/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400">
            <FaLinkedin />
            </a>

            <a 
            href="https://www.behance.net/waiyi" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300">
            <FaBehance />
            </a>
          
            <a 
              href={`https://wa.me/${+959260567664}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400">
            <FaWhatsapp />
            </a>
          </div>
        </div>
        <hr className="border-gray-400" />
        <p className="text-center text-sm font-body text-gray-400 mt-4">
          © 2025 Copyright by Waiyi. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
