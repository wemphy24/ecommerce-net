import React from "react";
import Button from "../components/Button.jsx";
import Navbar from "../components/Navbar.jsx";
import Landing from "../assets/Landing.png";
import Pricing from "../sections/Pricing.jsx";
import Testimoni from "../sections/Testimoni.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen grid place-items-center lg:grid-cols-2 lg: my-12">
        <div className="text-section mx-16">
          <h1 className="text-5xl font-medium">
            Fast network with cheap price and no trouble
          </h1>
          <p className="my-6 font-medium text-lg">
            Evolve at the speed and scale of your network performance with fast
            internet
          </p>
          <div className="flex items-center gap-6 font-medium text-lg">
            <Link to="/">
              <Button label="View pricing" size="w-36"></Button>
            </Link>
            <Link to="/">
              <p className="hover:scale-105 hover:-translate-x-0 hover:duration-150">
                Get a demo
              </p>
            </Link>
          </div>
          <p className="mt-6 font-medium text-zinc-400 text-lg">
            Unlimited speed network
          </p>
        </div>
        <div className="image-section mx-16">
          <img
            className="w-full h-[600px] mx-auto rounded-xl"
            src={Landing}
            alt=""
          />
        </div>
      </div>
      <Pricing></Pricing>
      <Testimoni></Testimoni>
      <div className="hidden lg:block md:mt-36">
        <Footer></Footer>
      </div>
    </div>
  );
}
