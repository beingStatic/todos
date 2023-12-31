'use client';

import React, { useState } from 'react';
import AnimatedButton from '../AnimedButton/AnimatedButton';
import { useRouter } from 'next/navigation';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorStatus, setErrorStatus] = useState(false);
  const router = useRouter();
  const errorMessage = 'Please Enter the fields first';
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      setErrorStatus(true);
      return; // Exit the function early if title is empty
    }

    try {
      const response = await fetch('http://localhost:3000/api/collections', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        setErrorStatus(false);
        console.log('Success');
        console.log(response);
        router.refresh();
        setTitle('');
        setContent('');
      } else {
        throw new Error('Failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create Todos"
          className="text-2xl border p-4 block w-1/2 mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          className="text-2xl border p-4 block w-1/2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errorStatus && (
          <p className="text-2xl text-red-600 mt-4">{errorMessage}</p>
        )}
        <AnimatedButton title="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateTodo;
