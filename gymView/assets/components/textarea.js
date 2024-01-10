import React from "react";

export const Textarea = ({ name, handler }) => {
  return (
    <div className="flex flex-col ">
      <span className="text-center"> {name}</span>
      <textarea className="bg-gray-600 h-full" />
    </div>
  );
};
