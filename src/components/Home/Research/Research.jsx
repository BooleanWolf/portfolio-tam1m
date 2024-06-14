import React from "react";
import SectionHeader from "./SectionHeader";
import ResearchCard from "./ResearchCard";

const Research = () => {
  const researchList = [
    {
      id: 1,
      title: "The Impact of AI on Healthcare",
      author: "John Doe",
      tags: ["AI", "Healthcare", "Research"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      publication: "Journal of Healthcare Technology",
    },
    // Add more research items as needed
  ];

  const researchInterests = [
    "Deep Learning",
    "Computer Vision",
    "Robotics",
    "Intelligent Systems",
    "Reinforcement Learning",
  ];

  return (
    <div>
      <SectionHeader
        title="My Research Interests:"
        items={researchInterests.map((interest, index) => `${index + 1}. ${interest}`)}
      />
      <h2 className="text-2xl font-semibold mb-2">Publications: </h2>
{/* 
      <div>
        {researchList.map((research) => (
          <ResearchCard key={research.id} research={research} />
        ))}
      </div> */}
    </div>
  );
};

export default Research;
