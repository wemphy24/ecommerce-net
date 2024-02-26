import React from "react";
import CardPricing from "../components/CardPricing.jsx";

export default function Pricing() {
  return (
    <div className="mx-16 h-sceen">
      <div className="description-section text-center">
        <p className="font-medium text-zinc-400 text-xl">
          Enjoy the service benefits we provide
        </p>
        <h1 className="text-5xl font-medium my-6">Choose your package</h1>
        <p className="font-medium text-lg">
          We will try to help you get stable and fast internet service so that
          you can be satisfied with our service
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-8 justify-evenly my-6">
        <CardPricing></CardPricing>
        <CardPricing></CardPricing>
        <CardPricing></CardPricing>
      </div>
    </div>
  );
}
