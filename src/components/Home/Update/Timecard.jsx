import React from 'react';

function Timecard({ author, content, date }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">{author.name}</h2>
        </div>
      </div>
      <p className="text-gray-800 mb-4">{content}</p>
      <div className="flex justify-between items-center">
        <div className="text-gray-500 text-xs">
          <span className="font-semibold">{date}</span>
        </div>

      </div>
    </div>
  );
}

export default Timecard;