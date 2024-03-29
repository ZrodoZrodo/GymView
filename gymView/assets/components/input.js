import React from "react";

export const Input = ({ name, handler }) => {
  return (
    <div className="flex flex-col ">
      <span className="text-center">{name}</span>
      <input
        onChange={(e) => handler(e.target.value)}
        type="text"
        className="bg-gray-600"
      />
    </div>
  );
};
