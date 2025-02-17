// components/Hero.tsx

import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Video with optimization */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/output_soho_pixie_2.mp4" type="video/mp4" />
        <source src="/output_soho_pixie_2.webm" type="video/webm" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Centered Heading */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl sm:text-5xl md:text-6xl font-bold">
        <h1>Alyssa Grey</h1>
      </div>
    </section>
  );
};

export default Hero;
