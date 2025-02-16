
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-blue-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Loader;
