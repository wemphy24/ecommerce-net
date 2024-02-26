import React from "react";
import Button from "./Button.jsx";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div>
      <div className="w-80 border border-gray-300 py-6 px-6 rounded-xl">
        <h3 className="text-2xl font-medium my-2">Premium 🔥</h3>
        <div className="my-2">
          The essentials to provide your best work for clients
        </div>
        <div className="text-4xl font-bold my-6">
          $24 <span className="font-medium text-zinc-400 text-lg">/month</span>
        </div>
        <hr className="border border-solid border-zinc-900" />
        <div className="list-feature my-6 font-medium">
          <div className="flex items-center gap-2 my-2">
            <svg
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-zinc-900 w-8 h-8"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              ></path>
            </svg>
            <p>Maximum speed</p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <svg
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-zinc-900 w-8 h-8"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              ></path>
            </svg>
            <p>Unlimited bandwith</p>
          </div>
          <div className="flex items-center gap-2 my-2">
            <svg
              data-slot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="text-zinc-900 w-8 h-8"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              ></path>
            </svg>
            <p>Up to 100 mbps</p>
          </div>
        </div>
        <div className="font-medium">
          <Link to="/transaction">
            <Button label="Buy plan" size="w-full"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
