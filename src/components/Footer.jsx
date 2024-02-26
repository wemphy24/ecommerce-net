import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="#footer" className="bg-zinc-900 p-4">
      <div className="flex items-center justify-center gap-12">
        <Link to="/">
          <p className="font-bold text-4xl text-white">W-Network</p>
        </Link>
        <div className="menu-section font-medium text-white text-lg ">
          <ul className="flex gap-6">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Pricing</li>
            </Link>
            <Link to="/">
              <li>Testimonial</li>
            </Link>
            <Link to="/">
              <li>About</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
