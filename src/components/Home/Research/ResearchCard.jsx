import React from "react";

const ResearchCard = ({ research }) => {
  const { title, author, tags, description, publication } = research;

  return (
    <div className="border border-gray-200 rounded-md p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Author:</span> {author}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Tags:</span>{" "}
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-100 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag}
          </span>
        ))}
      </p>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-700">
        <span className="font-semibold">Published in:</span> {publication}
      </p>
    </div>
  );
};

export default ResearchCard;