import EditCollectionForm from '@/app/components/EditCollectionForm/EditCollectionForm';
import React from 'react';

const getCollectionById = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/collections/${id}`,
      {
        cache: 'no-store',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
const EditCollection = async ({ params }) => {
  const { id } = params;
  const { collection } = await getCollectionById(id);
  const { title, content } = collection;
  return (
    <div>
      <EditCollectionForm id={id} title={title} content={content} />
    </div>
  );
};

export default EditCollection;
