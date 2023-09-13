import React from 'react';
import styles from './style.module.css';

const Modal = ({ handleConfirm, handleCancel }) => {
  return (
    <div className="w-full mt-4">
      <div className="w-full mx-auto bg-zinc-700 p-[2rem] rounded-3xl flex justify-between items-center">
        <h2 className="text-4xl text-white fond-bold text-center">
          Are you Sure you want to Remove the task
        </h2>
        <div className="flex justify-between items-center">
          <button
            className="block bg-white w-1/2 rounded-2xl"
            onClick={handleConfirm}
          >
            <p className="text-3xl text-black p-4 text-center">Confirm</p>
          </button>
          <button
            className="block bg-slate-900 w-1/2  rounded-2xl ml-4"
            onClick={handleCancel}
          >
            <p className="text-3xl text-white p-4 text-center">Cancel</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
