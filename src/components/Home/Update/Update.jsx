import React from 'react';
import Timecard from './Timecard';

function Update() {
  const posts = [
    {
      author: {
        name: 'Became General Software Member at Team Interplanetar',
        avatar: 'https://via.placeholder.com/50',
        position: '',
      },
      content: 'After a recruitment process, I am selected as the general software member at Team Interplanetar.',
      date: 'March, 2023',
    },
    
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {posts.map((post, index) => (
        <Timecard key={index} author={post.author} content={post.content} date={post.date} />
      ))}
    </div>
  );
}

export default Update;