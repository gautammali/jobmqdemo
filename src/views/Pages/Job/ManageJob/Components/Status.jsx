import React from "react";

export default function Status({ data }) {
  return (
    <div className="flex justify-center items-center">
      <button className="text-white rounded-full px-6 py-1 bg-[#0072b3] font-semibold">
        {data}
      </button>
    </div>
  );
}
