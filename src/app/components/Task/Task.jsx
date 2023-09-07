'use client';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

const Task = ({ title, content, id }) => {
  const router = useRouter();
  const removeCollection = async () => {
    const confirmed = confirm('Are you Sure');
    if (confirmed) {
      const response = await fetch(
        `http://localhost:3000/api/collections?id=${id}`,
        {
          method: 'DELETE',
        }
      );
      if (response.ok) {
        router.refresh();
      }
    }
  };
  return (
    <div className="flex items-center py-5 w-1/2 justify-between">
      <div>
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-2xl">{content}</p>
      </div>
      <div>
        <Link href={`/edit-collection/${id}`}>
          <span className="text-xl cursor-pointer">Edit</span>&nbsp;
        </Link>
        <span className="text-xl cursor-pointer" onClick={removeCollection}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default Task;
