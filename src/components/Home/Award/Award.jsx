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
                <span className="font-semibold">Project Title:</span> {award.projectTitle}
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
