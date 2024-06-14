import React from "react";

const Experience = () => {
  // Sample experience data
  const experiences = [
    {
      id: 1,
      jobTitle: "Member, Software Sub-Team",
      company: "Team Interplanetar, BUET",
      from: "2023",
      to: "",
      role: "General Member",
      responsibility: "Developing autonomous system for the rover and also tuning the navigation system.",
      logo: "https://buetinterplanetar.com/wp-content/uploads/2021/11/logo.png", // Sample logo URL
    },
    // Add more experience records as needed
  ];

  return (
    <div>
        
      <div>
        {experiences.map((experience) => (
          <div key={experience.id} className="flex gap-4 my-4 p-3 border shadow-sm">
            <div>
              <img className="w-[50px] h-[50px]" src={experience.logo} alt={experience.company} />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{experience.jobTitle}</h2>
              <p>
                {experience.from} - {experience.to}
              </p>
              <p>
                <span className="font-semibold">Company:</span> {experience.company}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {experience.role}
              </p>
              <p>
                <span className="font-semibold">Responsibility:</span> {experience.responsibility}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
