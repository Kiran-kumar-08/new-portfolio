import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      {/* Aurora/Nebula Glow */}
      <div className="aurora-glow"></div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: { value: 'transparent' },
          },
          particles: {
            number: { value: 80 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.6,
              direction: 'none',
              outModes: 'bounce',
            },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 120,
              opacity: 0.3,
              width: 1,
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />
    </>
  );
};

export default AnimatedBackground;
