// components/Hero.tsx

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Video with optimization */}
      <video
        poster='/soho_pixie_cover.jpg'
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/output_soho_pixie_2.mp4" type="video/mp4" />
        <source src="/videos/output_soho_pixie_2.webm" type="video/webm" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Centered Heading with hot pink color, cool font style, and animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-pink-300 font-poppins font-bold">
        <h1 className="text-4xl sm:text-5xl md:text-6xl animate-fadeIn whitespace-nowrap">
          ALYSSA GREY
        </h1>
      </div>
    </section>
  );
};

export default Hero;
