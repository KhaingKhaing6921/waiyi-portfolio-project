import React from "react";
import img1 from '../../assets/projects/01.png'
import img2 from '../../assets/projects/02.png'
import img3 from '../../assets/projects/03.png'
import img4 from '../../assets/projects/04.png'
import img5 from '../../assets/projects/05.png'
import img6 from '../../assets/projects/06.png'
import img7 from '../../assets/projects/07.png'
import img8 from '../../assets/projects/08.png'
import img9 from '../../assets/projects/09.png'
import img10 from '../../assets/projects/10.png'
import img11 from '../../assets/projects/11.png'
import img12 from '../../assets/projects/12.png'


const projects = [  
  {
    id: 1,
    title: "Healthcare Management (SaaS) Website & Admin Dashboard Application",
    image: img1, // 🖼️ Add your real image path here
    tags: ["Product", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 2,
    title: "Oway Travel Application",
    image: img2, // 🖼️ Add your real image path here
    tags: ["Product", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 3,
    title: "Oway Ride Applications",
    image: img3, // 🖼️ Add your real image path here
    tags: ["Product", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 4,
    title: "Oway Travel Website & Mobile Version",
    image: img4, // 🖼️ Add your real image path here
    tags: ["Product", "UI/UX", "Branding", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 5,
    title: "3T Ultra-G Website Design",
    image: img5, // 🖼️ Add your real image path here
    tags: ["Wordpress", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 6,
    title: "Revamp Exam Booking & Payment",
    image: img6, // 🖼️ Add your real image path here
    tags: ["Payment", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 7,
    title: "Revamp Speech Therapy Website Design",
    image: img7, // 🖼️ Add your real image path here
    tags: ["Branding", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 8,
    title: "Revamp Psychology Website Design",
    image: img8, // 🖼️ Add your real image path here
    tags: ["Branding", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
  {
    id: 9,
    title: "Wellness Centre Website Design",
    image: img9, // 🖼️ Add your real image path here
    tags: ["Branding", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
   {
    id: 10,
    title: "Physiotherapy Website Design",
    image: img10, // 🖼️ Add your real image path here
    tags: ["Branding", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
   {
    id: 11,
    title: "Online Shopping Application",
    image: img11, // 🖼️ Add your real image path here
    tags: ["Product", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
   {
    id: 12,
    title: "Behaviour Analysis Website Design",
    image: img12, // 🖼️ Add your real image path here
    tags: ["Branding", "UI/UX", "Visual"],
    note: "Restricted by NDA",
  },
];

const Works = () => {
  return (
    <section id="portfolio" className="px-6 md:px-20 py-16 bg-gray-100 text-gray-900">
      <h2 className="text-5xl md:text-7xl font-medium font-bogart text-center mb-12">Some of My Works</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-100 border border-white flex flex-col h-full rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
            <img src={project.image} alt={project.title} className="w-full h-auto md:h-100 " />
            
            <div className="p-4 space-y-3 flex flex-col flex-grow ">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`mt-5 px-3 py-1 text-sm md:text-xl rounded-full ${
                      tag === "Visual" ? "bg-amber-300 text-gray-700" :
                      tag === "UI/UX" ? "bg-blue-100 text-gray-900" :
                      "border"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium font-bogart">{project.title}</h3>

               {/* Spacer pushes note to bottom */}
              <div className="flex-grow"></div>

              {/* Note */}
              <p className="text-x; text-gray-500 font-title">{project.note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
