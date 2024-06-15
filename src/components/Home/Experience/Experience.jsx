import React from "react";

const Experience = () => {
  // Sample experience data
  const experiences = [
    {
      id: 1,
      jobTitle: "Leader of Navigation System",
      company: "ERC Team from Team Interplantar",
      from: "2023",
      to: "2023",
      role: "Leader of Navigation System",
      responsibility: "Performing tasks related to navigation in ERC 2023.",
      logo: "https://buetinterplanetar.com/wp-content/uploads/2021/11/logo.png", // Sample logo URL
    },
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
    {
      id: 1,
      jobTitle: "Organizer, Rajshahi College Science Fest 2018",
      company: "Rajshahi College",
      from: "2018",
      to: "2018",
      role: "Organizer",
      responsibility: "We organized a science fest when I was in my college. More than 650 people participated in the fest.",
      logo: "https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/331057024_532002288787483_5699980766339220080_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeElWdaozkgRrTiEUvvZhvmEKnoKhpYZKZIqegqGlhkpks_4mbY_Sq4tG8qZo1iB2Bb1AohaoQ-QvKlhIHYlLtP5&_nc_ohc=-IpOMRyciM0Q7kNvgEBqew_&_nc_ht=scontent.frjh3-1.fna&oh=00_AYCo0E_MD2bcFVXP--owtlvLQ7JLSBwtDPnQTGC8mb5vzw&oe=66732149", // Sample logo URL
    },
    // Add more experience records as needed
  ];

  return (
    <div>
        
      <div>
        {experiences.map((experience) => (
          <div key={experience.id} className="flex gap-4 my-4 border shadow-sm">
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
