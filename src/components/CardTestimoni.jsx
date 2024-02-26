import React from "react";
import Avatar from "../assets/Avatar.png";

export default function CardTestimoni() {
  return (
    <div>
      <div className="w-96 border border-gray-300 py-6 px-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="avatar flex items-center gap-4">
            <img
              className="rounded-full border border-zinc-400 w-16 h-16"
              src={Avatar}
              alt=""
            />
            <div className="role-section">
              <p className="font-medium text-lg">Olivia Manson</p>
              <p className="font-medium text-zinc-400">Project Manager</p>
            </div>
          </div>
          <div className="rating">
            <p className="font-medium text-lg">4.9 ⭐</p>
          </div>
        </div>

        <div className="description mt-4">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et
          adipisci, iusto voluptas enim sint dolore sed dicta ipsa! Suscipit
          fugit quae reprehenderit nihil."
        </div>
      </div>
    </div>
  );
}
