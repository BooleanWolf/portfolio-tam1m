import React from "react";

const SectionHeader = ({ title, items }) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 shadow-sm mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-inside text-gray-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionHeader;
