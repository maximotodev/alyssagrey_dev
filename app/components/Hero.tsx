import React from "react";
import SocialMediaBar from "./ui/SocialMediaBar";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Video with optimization */}
      <video
        poster="/soho_pixie_cover.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/output_soho_pixie_2.mp4" type="video/mp4" />
        <source src="/videos/output_soho_pixie_2.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Centered Heading with hot pink color, cool font style, and animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-300 font-poppins font-bold text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl animate-fadeIn whitespace-nowrap">
          ALYSSA GREY
        </h1>
      </div>

      <div className="absolute bottom-10 w-full px-10 flex flex-col md:flex-row justify-between items-center md:items-start">
        {" "}
        {/* Changed to flex-col on small screens */}
        {/* Social Media Bar */}
        <div className="mb-12 md:mb-0">
          {" "}
          {/* Margin bottom for spacing on small screens */}
          <SocialMediaBar />
        </div>
        {/* Join Newsletter Button */}
        <button className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-pink-400 transition whitespace-nowrap">
          {" "}
          {/* Added whitespace-nowrap */}
          Join the Newsletter
        </button>
      </div>
    </section>
  );
};

export default Hero;
