import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-[spin_3s_linear_infinite]"></div>
    </div>
  );
};

export default Loading;
