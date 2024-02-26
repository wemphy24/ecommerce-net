import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-4">
      <nav
        class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          p-4
          md:py-0
          text-lg text-zinc-900
        "
      >
        <div>
          <Link to="/">
            <p className="font-bold text-4xl ">W-Network</p>
          </Link>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          class="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="
              pt-4
              text-base
              md:flex
              md:justify-between 
              md:pt-0
              font-medium"
          >
            <li className="text-lg hover:scale-105 hover:-translate-x-0 hover:duration-150">
              <Link to="/" class="md:p-4 py-2 block">
                Home
              </Link>
            </li>
            <li className="text-lg hover:scale-105 hover:-translate-x-0 hover:duration-150">
              <Link to="/" class="md:p-4 py-2 block">
                Pricing
              </Link>
            </li>
            <li className="text-lg hover:scale-105 hover:-translate-x-0 hover:duration-150">
              <Link to="/" class="md:p-4 py-2 block">
                Testimonial
              </Link>
            </li>

            <li className="flex items-center">
              <Link to="/login">
                <Button label="Login" size="w-36" margin="mx-2"></Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
