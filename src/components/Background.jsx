import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Background = () => {
  const particlesInit = (main) => {
    loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div className="background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          particles: {
            number: {
              value: 100,
            },
            size: {
              value: 3,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.5,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default Background;
