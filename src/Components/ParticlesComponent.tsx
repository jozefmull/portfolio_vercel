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
      options={
        {
          "particles": {
            "number": {
              "value": window.innerWidth > 992 ? 125 : window.innerHeight > 768 ? 100 : window.innerHeight > 480 ? 80 : 60,
              "density": {
                "enable": false,
                "value_area": 500
              }
            },
            "color": {
              "value": "#111111"
            },
            "shape": {
              "type": "polygon",
              "stroke": {
                "width": 0,
                "color": "#111111"
              },
              "polygon": {
                "nb_sides": 6
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.7,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 4,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 3,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#111111",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 5,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "bounce",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 500,
                "rotateY": 500
              }
            }
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 200,
                "line_linked": {
                  "opacity": 0.65
                }
              },
              "repulse": {
                "distance": 200,
                "duration": 0.5
              }
            }
          },
          "retina_detect": true
        }
  }
    />
  )
}

export default ParticlesComponent