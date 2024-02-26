import React from "react";
import CardTestimoni from "../components/CardTestimoni.jsx";

export default function Testimoni() {
  return (
    <div>
      <div className="mx-16 h-screen mt-40">
        <div className="description-section text-center">
          <p className="font-medium text-zinc-400 text-xl">
            Testimoni from our customers
          </p>
          <h1 className="text-5xl font-medium my-6">What our customers say</h1>
          <p className="font-medium text-lg">
            We strive to maintain customer satisfaction because our main focus
            and goal is to create a stable and fastest connection
          </p>
        </div>
        <div className="testimoni-section block items-center gap-8 justify-evenly my-6 md:flex flex-wrap">
          <CardTestimoni></CardTestimoni>
          <CardTestimoni></CardTestimoni>
          <CardTestimoni></CardTestimoni>
          <CardTestimoni></CardTestimoni>
          <CardTestimoni></CardTestimoni>
          <CardTestimoni></CardTestimoni>
        </div>
      </div>
    </div>
  );
}
