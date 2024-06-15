import React, { useState } from "react";

const Award = () => {
  // Sample award data
  const awards = [
    {
      id: 1,
      title: "4th Position - IEEE R10 Robotics Competition [Bangladesh Section]",
      organization: "IEEE",
      role: "Team Leader",
      projectTitle: "Autonomous Medicine Delivery Bot in local area with predefined map",
      tags: ["Robotics", "Autonomous Navigation", "Robotics"],
      imageUrl: "https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/448088294_1897616487325150_1131230713401396473_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFpJuVWYryzvWZ3QpMpai6U4Dir6s1eiwXgOKvqzV6LBSY2U-P9mIb5aBJ1hmLj49Mc1ADvANdeGO7SqXaShMcM&_nc_ohc=PjJZm-pNip4Q7kNvgFQu5FS&_nc_ht=scontent.frjh3-1.fna&oh=00_AYDsXI2WKwcYqd8m2sM37IzV3um16WBgVqJ11_f55IZXjg&oe=66732469",
    },
    {
      id: 2,
      title: "Champion - EEE Day 2024 Project Showcasing",
      organization: "Dept of EEE, BUET",
      role: "Team Leader",
      projectTitle: "RavenClaw: A Stable Aerial Manipulator at height altitude for precise Manipulation",
      tags: ["Robotics", "Autonomous", "Drone", "ROS"],
      imageUrl: "https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/448163281_1897616500658482_3016279489185509143_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFO0YytT1iiyf46RO6oA66830pbKAGU8H7fSlsoAZTwfpGbSLKqdgF1mPNLARpcEEV3R6F_XF5Z45su2a1F5sBZ&_nc_ohc=gla_g6o5ep8Q7kNvgHj66iy&_nc_ht=scontent.frjh3-1.fna&oh=00_AYCD5Jea4jwvd3rLK-Xi7_EJBlaEQV0DJsxEe1RN8b6sEA&oe=66732F93",
    },
    {
      id: 3,
      title: "2nd Runner Up - Robo Carnival Project Showcasing",
      organization: "Buet Robotics Society",
      role: "Team Leader",
      projectTitle: "RavenClaw: A Stable Aerial Manipulator at height altitude for precise Manipulation",
      tags: ["Robotics", "Autonomous Navigation", "Robotics"],
      imageUrl: "https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/448275940_1897616513991814_997156550982930814_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEsVKL1QGdoC_OJyBLwfUeuwmRYqjnYF-TCZFiqOdgX5OyuR9QaCFpxyDDwfrOhWYJx53rhvTqNXnETLkIS9mJl&_nc_ohc=_tpW0s0vdCUQ7kNvgFdrF6W&_nc_ht=scontent.frjh3-1.fna&oh=00_AYDKYynN6UFkeYAchyxG6tinG6Xld6KaEfQrD3BInI6NOw&oe=667302C1",
    },
    {
      id: 4,
      title: "Best Theme Adaption Award - IEEE BUET CS Gamejam 2023",
      organization: "IEEE BUET CS",
      role: "Team Leader",
      projectTitle: "Glitch - A platform game with random glitch",
      tags: ["Pygame", "Algorithm", "Game Development"],
      imageUrl: "https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/326096158_826971865066918_7299458180268144801_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgFs0pAwa0n2Hz2pM5Sts47lGIyLdaer_uUYjIt1p6v0W4c1VOkvOH04L5YbRVOr52SdezSuHbXLuEVBpnh1w_&_nc_ohc=9jGs6neN03cQ7kNvgGPQINW&_nc_ht=scontent.frjh3-1.fna&oh=00_AYBqY7cHxE0Lt6X1ZfcnQQuRoUN1v95ZDwHTuj-GRmE66A&oe=66730718",
    },
    {
      id: 7,
      title: "13th - European Rover Challenge 2023",
      organization: "European Space Foundation",
      role: "Leader of Navigation System",
      projectTitle: "My responsibility was to conduct the navigation task in the remote edition. I performed the task successfully and achieved 150/150 point for my team (Team Interplanetar). Moreover, for the navigation task, I developed and implemented some algorithm and engineering solutions for the problems that arose in navigation task.",
      tags: ["Rover", "Autonomous", "ROS", "Intelligent System"],
      imageUrl: "https://media.licdn.com/dms/image/D5622AQEnrSlx-sbP8g/feedshare-shrink_1280/0/1695651421348?e=1721260800&v=beta&t=dBTrkQ8q2AVYYTiMlozSB2X6WPcca-MDMY-EFuH-xIk",
    },
    {
      id: 8,
      title: "2nd - Antolian Rover Challenge 2024 Final Selection",
      organization: "European Space Foundation",
      role: "Senior Member of Software Team",
      projectTitle: "I developed rover autonomous system. Rover could follow and distinguish between which aruco tag to traverse first.",
      tags: ["Rover", "Autonomous", "ROS", "Intelligent System"],
      imageUrl: "https://via.placeholder.com/400",
    },
    {
      id: 6,
      title: "15th - International Rover Design Challenge (IRDC) 2023",
      organization: "Space Robotics Society",
      role: "Member of Softare Team",
      projectTitle: "Developed some intuitive algorithm for the Rover which includes Failure Mechanism, Thermal Control, Autonomous Navigation etc.",
      tags: ["Rover", "Autonomous", "ROS", "Intelligent System"],
      imageUrl: "https://via.placeholder.com/400",
    },
   
   
    // Add more awards as needed
  ];

  // State for handling modal visibility and selected award
  const [showModal, setShowModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  // Function to toggle modal visibility and set selected award
  const handleShowCredentials = (award) => {
    setSelectedAward(award);
    setShowModal(true);
  };

  return (
    <div>
      
      <div>
        {awards.map((award) => (
          <div key={award.id} className="flex gap-4 my-4 p-3 border shadow-sm">
            <div>
              <h2 className="text-xl font-semibold">{award.title}</h2>
              <p className="mt-2">
                <span className="font-semibold">Organization:</span> {award.organization}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Role:</span> {award.role}
              </p>
              <p className="mt-2">
                <span className="font-semibold">Project Title/Contribution:</span> {award.projectTitle}
              </p>
              <div className="mt-2">
                <span className="font-semibold">Tags:</span>{" "}
                {award.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="bg-black-500 hover:bg-gray-600 text-white py-1 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
                onClick={() => handleShowCredentials(award)}
              >
                Show Credentials
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Award Credentials</h2>
              <img src={selectedAward.imageUrl} alt="Award Credentials" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Award;
