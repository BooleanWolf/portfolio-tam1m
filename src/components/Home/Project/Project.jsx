import React, { useState } from "react";

const Project = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "RavenClaw: An Aerial Manipulator for Precise Manipulation at high Altitude",
      tags: ["ROS", "Robotics", "Pixhawk", "Drone", "Arduino"], 
      category: "Intermediate",
      description: "We made a drone that can perform manipulation task while it is airborne. This is was part of our ME366 course. As I was the leader of my team, I had to ensure integrity of everyone's work. Also I worked on the software part of our drone making it autonomous and stable at heights by overriding the pixhawk's control system. ",
      image: "https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/417438210_1820505208369612_3157968544407402334_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFYtHThmSXeTqyI-aCRxJTLmpZ1Fx0EsGaalnUXHQSwZptQBH3E68uzUPlbL-mRL9lAAveEYY-JPQtqNA9ZKjCp&_nc_ohc=Hq4SfPL267EQ7kNvgGtgSCX&_nc_ht=scontent.frjh3-1.fna&oh=00_AYDak7zSzmvnLLfKKGsOOUM7JKlPRz4SoDvWNGFi2a-Dlw&oe=6672500B",
      githubLink: "https://github.com/",
      youtubeLink: "https://www.youtube.com/",
    },
   
    // Add more projects as needed
  ];

  // State for filtering projects
  const [selectedTags, setSelectedTags] = useState([]);

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length
    ? projects.filter((project) =>
        project.tags.some((tag) => selectedTags.includes(tag))
      )
    : projects;

  // Function to handle filter selection
  const handleTagSelection = (tag) => {
    if (tag === "All") {
      setSelectedTags([]);
    } else {
      setSelectedTags((prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((prevTag) => prevTag !== tag)
          : [...prevTags, tag]
      );
    }
  };

  return (
    <div>
      {/* Filter section */}
      <div className="mb-4">
      <h2 className="text-sm text-gray-500 mb-2">Filter by Tag:</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`${
              selectedTags.length === 0 ? "bg-black text-white" : "bg-gray-300 text-gray-800"
            } py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
            onClick={() => handleTagSelection("All")}
          >
            All
          </button>
          {Array.from(new Set(projects.flatMap((project) => project.tags))).map((tag) => (
            <button
              key={tag}
              className={`${
                selectedTags.includes(tag) ? "bg-black text-white" : "bg-gray-300 text-gray-800"
              } py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500`}
              onClick={() => handleTagSelection(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      {/* Projects */}
      <div>
        {filteredProjects.map((project) => (
          <div key={project.id} className="rounded-lg overflow-hidden bg-white shadow-lg p-4 mb-4">
            <div className="flex">
              <img className="w-[200px] h-[150px]" src={project.image} alt={project.title} />
              <div className="ml-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex mt-2">
                  <button className="bg-black text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black mr-2">
                    GitHub
                  </button>
                  <button className="bg-black text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black">
                    YouTube
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p>
                <span className="font-semibold">Tags:</span>{" "}
                {project.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {tag}
                  </span>
                ))}
              </p>
              <p>
                <span className="font-semibold">Category:</span> {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;