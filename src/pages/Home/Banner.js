import React from 'react';
import background from '../../assets/cover/project-banner.jpg';

const Banner = () => {
  return (
    <div class="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">Welcome to our website. You can enjoy your shopping from here. Now we opperate more than seven country. Stay calm and Stay with us. Plase explore.</p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;