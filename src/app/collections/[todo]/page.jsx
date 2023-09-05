import Task from '@/app/components/Task/Task';
import React from 'react';

const Todos = ({ params }) => {
  return (
    <>
      <h1 className="text-4xl">{params.todo}</h1>
    </>
  );
};

export default Todos;
