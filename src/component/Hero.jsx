import React from "react";
import HeroImage from "../assets/images/hero-image.svg";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-gray-200 py-12 pl-4">
      <div className="md:col-start-1 md:col-end-2 self-start">
        <h2 className="text-4xl font-bold mb-4">Welcome to my website</h2>
        <p className="text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel enim vitae ipsum placerat condimentum. Sed nec massa vel velit cursus tincidunt vitae eget sapien.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
      <div className="hero-image md:col-start-2 md:col-end-3">
        <img src={HeroImage} alt="Hero" className="w-full" />
      </div>
    </section>
  );
}

export default HeroSection;

