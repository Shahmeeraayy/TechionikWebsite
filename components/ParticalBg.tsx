"use client";

import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const particlesInit = async (engine: Engine) => {
    console.log("Initializing tsparticles…");
    await loadFull(engine); // ✅ makes all features available
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -2 },
        background: { color: "#000000" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: { repulse: { distance: 200, duration: 0.6 }, push: { quantity: 6 } },
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 1200 } },
          color: { value: ["#F05323", "#FF5733", "#FFC300"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.7,
            random: { enable: true, minimumValue: 0.3 },
            anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false },
          },
          size: { value: { min: 1, max: 5 }, random: true, anim: { enable: true, speed: 3, size_min: 0.5, sync: false } },
          links: { enable: true, distance: 180, color: "#F05323", opacity: 0.3, width: 1, triangles: { enable: true, color: "#F05323", opacity: 0.05 } },
          move: { enable: true, speed: 1.5, direction: "none", outModes: { default: "bounce" } },
        },
        detectRetina: true,
      }}
    />
  );
}
