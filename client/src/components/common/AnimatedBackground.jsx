import React, { useCallback } from "react";
// UPDATED IMPORT: Particles component from the new package
import Particles from "@tsparticles/react";
// Import loadFull from "tsparticles" for the full bundle
import { loadFull } from "tsparticles";

const AnimatedBackground = () => {
  // Callback to initialize the tsParticles engine
  const particlesInit = useCallback(async (engine) => {
    // This loads the full tsparticles package bundle
    // You can also use loadSlim(engine) if you only need basic features
    await loadFull(engine);
  }, []);

  // Callback once particles are loaded (optional, good for debugging)
  const particlesLoaded = useCallback(async (container) => {
    // console.log("Particles container loaded", container);
  }, []);

  // Customize particle options for a classic modern look
  const particleOptions = {
    // Background settings
    background: {
      color: {
        value: "#000000", // A very dark background for contrast with light particles
      },
      // You can add an image background if desired, e.g.:
      // image: "url('/path/to/your/background-image.jpg')",
      // repeat: "no-repeat",
      // size: "cover",
    },
    // Frame rate limit
    fpsLimit: 60,

    // Interactivity settings (how particles react to user input)
    interactivity: {
      events: {
        // Particles react when clicked
        onClick: {
          enable: true,
          mode: "push", // Add new particles on click
        },
        // Particles react when hovered over
        onHover: {
          enable: true,
          mode: "grab", // 'grab' connects particles, 'repulse' pushes them away
        },
        // Particles adjust on window resize
        resize: true,
      },
      // Modes for interactivity
      modes: {
        push: {
          quantity: 4, // Number of particles to push on click
        },
        grab: {
          distance: 150, // Distance for grab mode
          links: {
            opacity: 0.5, // Opacity of links in grab mode
          },
        },
      },
    },

    // Particles themselves
    particles: {
      // Color of individual particles
      color: {
        value: "#FFFFFF", // White particles
      },
      // Links/lines between particles
      links: {
        color: "#FFFFFF", // White lines
        distance: 150, // Max distance for links
        enable: true, // Enable drawing links
        opacity: 0.5, // Opacity of links
        width: 1, // Width of links
      },
      // Particle collisions
      collisions: {
        enable: true, // Particles bounce off each other
      },
      // Particle movement
      move: {
        direction: "none", // Movement direction
        enable: true, // Enable particle movement
        outModes: {
          default: "bounce", // Particles bounce off canvas edges
        },
        random: false, // Randomize starting direction/speed
        speed: 1, // Speed of particles
        straight: false, // Straight or wavy path
      },
      // Number of particles and their density
      number: {
        density: {
          enable: true,
          area: 800, // Area to apply density
        },
        value: 80, // Total number of particles
      },
      // Particle opacity
      opacity: {
        value: 0.5, // Default opacity
      },
      // Particle shape
      shape: {
        type: "circle", // Circular particles
      },
      // Particle size
      size: {
        value: { min: 1, max: 5 }, // Random size between 1 and 5
      },
    },
    // Detect retina displays for sharper rendering
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles" // Unique ID for the particles instance
      init={particlesInit} // Callback for initialization
      loaded={particlesLoaded} // Callback when particles are loaded
      options={particleOptions} // The particle configuration object
      style={{
        position: "absolute", // Position relative to the parent with "relative"
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0, // Ensure it's behind content
      }}
    />
  );
};

export default AnimatedBackground;