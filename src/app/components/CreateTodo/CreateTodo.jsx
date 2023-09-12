'use client';

import React, { useState } from 'react';
import AnimatedButton from '../AnimedButton/AnimatedButton';
import { useRouter } from 'next/navigation';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert('Please enter the title name');
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
        <AnimatedButton title="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateTodo;
