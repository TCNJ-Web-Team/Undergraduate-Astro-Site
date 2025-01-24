import React, { useState } from "react";

const Popup = ({ content, onClose, heading }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <h2 className="text-lg font-bold mb-4">{heading}</h2>
        <div className="text-gray-700">
          {content.map((school, index) => (
            <p key={index} className="mb-2">
              {school}
            </p>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
