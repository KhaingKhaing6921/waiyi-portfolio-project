import React from "react";
import work from "../../assets/about/about.png";

export default function Experience() {
  const jobs = [
    {
      title: "Founder & Community Builder",
      period: "2020 Jan - Present",
      company: "UXMM (User Experience Myanmar)",
      description: "Co-founded UXMM, Myanmar's premier non-profit organization dedicated to fostering a thriving UX/UI design community. Spearheaded initiatives to bridge the gap between international standards and local practices, providing access to valuable resources, mentorship, and networking opportunities."
    },
    {
      title: "Product Design Consultant",
      period: "2007 Jul - Present",
      company: "Ultra-G (Myanmar)",
      description: "Led the design of the website, app, and visual elements, while actively collaborating with users to ensure a seamless experience. Successfully launched projects such as FMC (Forever Member Card) e-commerce application, BOTs (Bus Online Ticketing System)."
    },
    {
      title: "UX Consultant",
      period: "2020 Nov - 2024 Jul",
      company: "S2T Unlocking Cyberspace & Dynamics Therapy Group (Singapore)",
      description: "Led cross-functional teams in developing innovative digital solutions. Expert in gathering and translating diverse stakeholder needs into actionable requirements. Proficient in design thinking, creating intuitive user experiences, and building robust product roadmaps."
    },
    {
      title: "Sr. Customer Experience Manager",
      period: "2016 Aug - 2022 Nov",
      company: "Oway Pte Ltd (Myanmar)",
      description: "Led product strategy, development, and delivery. Defined product vision, gathered requirements, prioritized features, and collaborated with cross-functional teams to ensure high-quality product outcomes."
    },
    {
      title: "UX Designer (Team Lead)",
      period: "2011 Oct - 2016 Jul",
      company: "Simulation Software & Technology (S2T) (Singapore)",
      description: "Experienced in designing, developing, and improving websites and applications that align with business goals. Collaborated effectively with cross-functional teams to deliver high-value features for clients."
    },
    {
      title: "Design & Display Executive",
      period: "2010 Aug - 2011 Aug",
      company: "Carrefour (Singapore)",
      description: "Responsible for creating product design, marketing materials and manage day to day operation of the product design organization."
    },
    {
      title: "Graphic Designer",
      period: "2008 Feb - 2010 Aug",
      company: "deCharacter Image Pte Ltd (Singapore)",
      description: "Responsible for product design, creating and maintaining organizational website."
    },
    {
      title: "Graphic & Layout Designer",
      period: "2005 - 2008",
      company: "The Myanmar Times",
      description: "Responsible for creating product and layout design for Myanmar Times newspapers. Implemented the successful NOW Magazine."
    },
    {
      title: "Graphic Designer",
      period: "2001 - 2005",
      company: "El'Dorado Digital Media",
      description: "Responsible for creating product design and teaching courses such as graphic design, web design and animation."
    }
  ];

  return (
    <section id="experience" className="px-6 md:px-20 py-16 bg-white text-gray-900">
      <h1 className="text-5xl md:text-6xl font-medium font-bogart text-left mb-12">Work Experience</h1>

      <div className="grid md:grid-cols-2 md:gap-5 gap-1 items-start">
        <div>
          <img
            src={work}
            alt="Work"
            className="w-full md:mx-0 md:w-120 md:h-auto object-contain grayscale"
          />
        </div>

        <div className="space-y-7">
          {jobs.map((job, index) => (
            <div key={index}>
              <div className="flex md:justify-between items-start md:mb-2 mb-0">
                <h2 className="text-md md:text-2xl font-bold">{job.title}</h2>
                <p className="text-sm md:text-lg font-semibold">{job.period}</p>
              </div>
              <h3 className="italic text-gray-500 mb-2">{job.company}</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-body">
                {job.description}
              </p>
              {index < jobs.length - 1 && <hr className="border-gray-300 mt-7" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}