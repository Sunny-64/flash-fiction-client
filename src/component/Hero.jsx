import React from "react";
import HeroImage from "../assets/images/hero-image.svg";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-gray-200 ">
      <div className="md:col-start-1 md:col-end-2 self-center place-content-start px-24">
        <h2 className="md:3xl lg:text-4xl font-bold mb-4">Share your short stories with <span className="highlight">Everyone!</span></h2>
        <p className="text-gray-700 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="buttons flex gap-8">
          <button className="btn py-2 px-4 font-semibold rounded">
            Read Stories
          </button>
          <button className="btn-bordered font-semibold py-2 px-4 rounded">
            Write Stories
          </button>
        </div>
      </div>
      <div className="hero-image md:col-start-2 md:col-end-3 px-24">
        <img src={HeroImage} alt="Hero" className="w-full" />
      </div>
    </section>
  );
}

export default HeroSection;

