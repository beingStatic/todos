import React from 'react';
import CreateTodo from '../components/CreateTodo/CreateTodo';

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
        return (
          <div key={item.id}>
            <h1 className="text-5xl font-bold my-4">{item.title}</h1>
            <p>{item.content}</p>
          </div>
        );
      })}
      <div>
        <CreateTodo />
      </div>
    </div>
  );
};

export default Collections;
