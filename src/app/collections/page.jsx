import React from 'react';
import CreateTodo from '../components/CreateTodo/CreateTodo';
import Task from '../components/Task/Task';

const fetchCollections = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/collections', {
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
const Collections = async () => {
  const { collections } = await fetchCollections();
  return (
    <div>
      {collections.map((item) => {
        return <Task key={item.id} title={item.title} content={item.content} />;
      })}
      <div>
        <CreateTodo />
      </div>
    </div>
  );
};

export default Collections;
