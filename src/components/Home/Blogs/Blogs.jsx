import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { introContent, goodContent } from './Md';

const Blogs = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: 'Introduction to React Hooks',
      content: introContent,
    },
    {
      id: 2,
      title: 'Good Markdown Practices',
      content: goodContent,
    },
  ]);

  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Blogs</h1>
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="my-4 p-3 border shadow-sm cursor-pointer" onClick={() => handleBlogClick(blog)}>
            <h2 className="text-xl font-semibold">{blog.title}</h2>
          </div>
        ))}
      </div>
      {selectedBlog && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <button className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={closeModal}>Close</button>
            <h2 className="text-2xl font-semibold">{selectedBlog.title}</h2>
            <ReactMarkdown>{selectedBlog.content}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;