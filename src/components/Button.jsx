import React from "react";

export default function Button(props) {
  const label = props.label;
  const size = props.size;
  const margin = props.margin;
  return (
    <div>
      <button
        className={`bg-zinc-900 text-white py-2.5 rounded-lg hover:scale-105 hover:-translate-x-0 hover:duration-150 ${size} ${margin}`}
      >
        {label}
      </button>
    </div>
  );
}
