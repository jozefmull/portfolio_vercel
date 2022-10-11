import {useCallback} from 'react'

import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles"

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles 
      id="tsparticles"
      init={particlesInit}
      options={{
        "particles": {
          "number": {
            "value": 6
          },
          "color": {
            "value": "#343434"
          },
          "shape": {
            "type": "polygon",
            "polygon": {
              "nb_sides": 6
            }
          },
          "opacity": {
            "value": 0.7,
            "random": true
          },
          "size": {
            "value": window.innerWidth > 992 ? 120 : window.innerWidth > 768 ? 100 : window.innerWidth > 480 ? 80 : 50,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 30,
              // "size_min": 100,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 300,
            "color": "#444",
            "opacity": 0.7,
            "width": 3
          },
          "move": {
            "enable": true,
            "speed": 8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": ["bubble"]
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 75,
              "duration": 10,
              "opacity": 0.7,
              "speed": 10
            }
          }
        }
    }}
    />
  )
}

export default ParticlesComponent