'use client';

import React, { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    // e.preventDefault();

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
          className="text-3xl border p-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          className="text-3xl border p-4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">
          <p className="text-3xl font-bold">SUBMIT</p>
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
