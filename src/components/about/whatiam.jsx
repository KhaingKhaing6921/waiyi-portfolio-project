import React from 'react';
import img1 from '../../assets/about/leaves.png';
import img2 from '../../assets/about/flowers.png';
import img3 from '../../assets/about/direction.png';
import img4 from '../../assets/about/blue_boat.png';

const WhatIAm = () => {
  const cards = [
    {
      id: 1,
      title: 'Product Design Learning Hub',
      desc: 'Dive into my comprehensive UX/UI courses, designed to help you become a confident product designer.',
      color: 'text-pink-500',
      img: img1,
      link: 'https://ultra-generations.com/',
    },
    {
      id: 2,
      title: 'SaaS Design Partner',
      desc: 'I work with B2B and B2C startups, offering strategic design consulting to help your SaaS products thrive.',
      color: 'text-green-700',
      img: img2,
      link: 'https://www.behance.net/waiyi',
    },
    {
      id: 3,
      title: 'Your Personal Design Mentor',
      desc: 'Feeling lost in your UX Role? Book a one-on-one session to get a clear roadmap and review your portfolio.',
      color: 'text-black',
      img: img3,
      link: 'https://cal.com/waiyimonsoe/30min?user=waiyimonsoe',
    },
    {
      id: 4,
      title: 'Design Consultant',
      desc: 'Lack of UX direction or strategy of your product? Get a clear design guidance with focused strategy sprints.',
      color: 'text-blue-700',
      img: img4,
      link: 'https://cal.com/waiyimonsoe/30min?user=waiyimonsoe',
    },
  ];

  return (
    <section className="px-6 md:px-16 py-16 bg-gray-100">
      <h1 className="text-5xl md:text-7xl font-medium font-bogart text-center mb-16">What I’m?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cards.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-7 p-7 bg-gray-100 border border-white h-full rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
          >
            {/* Image side - top aligned */}
            <div className="flex-shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-28 h-28 md:w-36 md:h-36 object-contain"
              />
            </div>

            {/* Text side - top aligned */}
            <div className="flex flex-col justify-start">
              <h2 className={`text-lg md:text-2xl font-bold mb-2 ${item.color}`}>
                {item.title}
              </h2>
              <p className="text-gray-800 text-[13px] md:text-lg leading-relaxed font-body">
                {item.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WhatIAm;
