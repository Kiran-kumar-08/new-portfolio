import React, { useCallback, useState, useEffect } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // or '@tsparticles/engine' for full bundle

const ThunderstormBackground = () => {
  const [thunderActive, setThunderActive] = useState(false);

  // Function to simulate thunder flashes
  const triggerThunder = useCallback(() => {
    setThunderActive(true);
    const delay = Math.random() * 100 + 50; // Short flash duration
    setTimeout(() => {
      setThunderActive(false);
    }, delay);

    // Schedule next thunder strike randomly
    const nextThunderTime = Math.random() * 5000 + 5000; // Between 5 to 10 seconds
    setTimeout(triggerThunder, nextThunderTime);
  }, []);

  useEffect(() => {
    // Start the thunder cycle after component mounts
    const initialThunderDelay = Math.random() * 5000 + 3000; // Initial delay 3-8 seconds
    const timer = setTimeout(triggerThunder, initialThunderDelay);
    return () => clearTimeout(timer); // Clear timeout on unmount
  }, [triggerThunder]);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine); // or loadFull(engine)
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  // Configuration for particles (stars and subtle lights)
  const particlesOptions = {
    background: {
      color: {
        value: "#0a0a0a", // Very dark background for night sky
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false, // You can enable click interactions if needed
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse", // Stars move away on hover
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // White stars
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      links: {
        enable: false, // No lines between stars
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 0.1, // Very slow movement for stars
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100, // Number of stars
      },
      opacity: {
        value: 0.5,
        random: {
          enable: true,
          minimumValue: 0.1,
        },
        animation: {
          enable: true,
          speed: 0.5, // Subtle twinkling
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle", // Stars are circles
      },
      size: {
        value: { min: 1, max: 2 }, // Star size
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
        className="w-full h-full" // Ensure Particles canvas fills the div
      />
      {/* Thunder Flash Overlay */}
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-75 ease-out ${
          thunderActive ? 'opacity-70' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default ThunderstormBackground;