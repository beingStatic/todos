import React from 'react';

const Task = ({ title, content }) => {
  return (
    <div className="flex items-center py-5 w-1/2 justify-between">
      <div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-2xl">{content}</p>
      </div>
      <div>
        <span className="text-xl cursor-pointer">Edit</span>&nbsp;
        <span className="text-xl cursor-pointer">Delete</span>
      </div>
    </div>
  );
};

export default Task;
