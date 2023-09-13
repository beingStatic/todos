// 'use client';
// import Link from 'next/link';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import { FaRegEdit } from 'react-icons/fa';
// import { FaRegTrashAlt } from 'react-icons/fa';

// const Task = ({ title, content, id }) => {
//   const router = useRouter();
//   const removeCollection = async () => {
//     const confirmed = confirm('Are you Sure');
//     if (confirmed) {
//       const response = await fetch(
//         `http://localhost:3000/api/collections?id=${id}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       if (response.ok) {
//         router.refresh();
//       }
//     }
//   };
//   return (
//     <div className="flex items-center py-5 w-1/2 justify-between">
//       <div>
//         <h3 className="text-3xl font-bold">{title}</h3>
//         <p className="text-2xl">{content}</p>
//       </div>
//       <div className="flex">
//         <Link href={`/edit-collection/${id}`}>
//           <span className="text-xl cursor-pointer">
//             <FaRegEdit />
//           </span>
//           &nbsp;&nbsp;
//         </Link>
//         <span className="text-xl cursor-pointer" onClick={removeCollection}>
//           <FaRegTrashAlt />
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Task;

'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import Modal from '../Modal/Modal';

const Task = ({ title, content, id }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const removeCollection = async () => {
    // Show the modal when the user clicks the delete icon
    setShowModal(true);
  };

  const handleConfirm = async () => {
    const response = await fetch(
      `http://localhost:3000/api/collections?id=${id}`,
      {
        method: 'DELETE',
      }
    );
    if (response.ok) {
      router.refresh();
    }
    setShowModal(false); // Hide the modal after confirming
  };

  const handleCancel = () => {
    setShowModal(false); // Hide the modal when cancel is clicked
  };

  return (
    <>
      {showModal && ( // Render the modal only when showModal is true
        <Modal handleConfirm={handleConfirm} handleCancel={handleCancel} />
      )}

      <div className="flex items-center py-5 w-1/2 justify-between">
        <div>
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-2xl">{content}</p>
        </div>
        <div className="flex">
          <Link href={`/edit-collection/${id}`}>
            <span className="text-xl cursor-pointer">
              <FaRegEdit />
            </span>
            &nbsp;&nbsp;
          </Link>
          <span className="text-xl cursor-pointer" onClick={removeCollection}>
            <FaRegTrashAlt />
          </span>
        </div>
      </div>
    </>
  );
};

export default Task;
