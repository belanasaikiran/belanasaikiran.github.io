// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children, classes }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed min-h-screen inset-0 z-100 flex items-center justify-center bg-black bg-opacity-50 transition-colors duration-300 ${classes}`}
      onClick={onClose} // Click outside to close
    >
      <div
        className="bg-white dark:bg-black p-2 lg:p-10 rounded-lg shadow-lg w-full max-w-3xl relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-gray-300 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
