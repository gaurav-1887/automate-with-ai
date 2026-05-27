import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (

    <Particles

      id="tsparticles"

      init={particlesInit}

      options={{

        fullScreen: {
          enable: true,
          zIndex: 0,
        },

        background: {
          color: {
            value: "#02040a",
          },
        },

        particles: {

          number: {
            value: 45,
          },

          color: {
            value: "#1e50ff",
          },

          links: {
            enable: true,
            color: "#1e50ff",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: { min: 1, max: 3 },
          },

        },

      }}

    />

  );
}

export default ParticlesBackground;