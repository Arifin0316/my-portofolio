import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particleInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particleInit}
      loaded={particleLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: '',
          },
        },
        fps_limit: 60, // Reduced from 120
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
              distance: 100, // Reduced interaction distance
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100, // Reduced repulse distance
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#4ECDC4', // Single color instead of array
            animation: {
              enable: false, // Disabled color animation
            }
          },
          links: {
            color: '#4ECDC4',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false, // Disabled collisions
          },
          move: {
            enable: true,
            speed: 0.8, // Reduced speed
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'out', // Changed from bounce to out
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000, // Increased area to reduce particle density
            },
            value: 40, // Reduced from 80
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 }, // Reduced particle size range
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;