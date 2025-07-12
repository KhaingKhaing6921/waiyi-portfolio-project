import domain from "../../assets/about/05.webp"

export default function DomainExpertise() {
  const expertise = [
    {
      title: "User Research & Analysis",
      description:
        "Conducting detailed user interviews, surveys, and usability testing to uncover insights and inform design decisions.",
    },
    {
      title: "Information Architecture & Interaction Design",
      description:
        "Crafting intuitive user flows and clear information hierarchies to enhance user experience.",
    },
    {
      title: "UI Design",
      description:
        "Designing visually striking and functional interfaces with a focus on usability, accessibility, and brand cohesion.",
    },
    {
      title: "Prototyping & Usability Testing",
      description:
        "Developing interactive prototypes and using user feedback to refine and perfect designs.",
    },
    {
      title: "Design Systems & Brand Guidelines",
      description:
        "Establishing robust design systems to ensure consistency across all digital touchpoints.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-6 md:px-15 py-10 gap-8 bg-gray-100">
      <div className="md:w-1/2">
        <h2 className="text-5xl md:text-7xl font-medium font-bogart mb-7 pt-10">Domain <br /> Expertise</h2>
        <img
          src={domain}
          alt="Workspace with computer"
          className="w-full h-130 md:w-90 object-cover md:h-120 pt-10 grayscale"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        {expertise.map((item, index) => (
          <div key={index} className="flex items-start pt-10">
            <span className="mt-1 mr-3 text-black font-bold text-xl">&#8226;</span>
            <div>
              <p className="font-bold text-xl md:text-xl mb-2">{item.title}</p>
              <p className="text-gray-700 text-xxl font-body">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
