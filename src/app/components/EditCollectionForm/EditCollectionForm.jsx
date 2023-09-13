'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AnimatedButton from '../AnimedButton/AnimatedButton';

const EditCollectionForm = ({ id, title, content }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/api/collections/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ newTitle, newContent }),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      router.refresh();
      router.push('/collections');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Create Todos"
          className="text-3xl border p-4 block"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <input
          type="text"
          placeholder="Content"
          className="text-3xl border p-4 block"
          value={newContent}
          onChange={(event) => setNewContent(event.target.value)}
        />
        <AnimatedButton title="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default EditCollectionForm;
