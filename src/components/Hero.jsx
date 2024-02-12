import { Fade } from "react-awesome-reveal";

import { isLoaded, bubblesContainerRef } from '../hooks/useHero.js';


export function Hero() {
    return (
        <div className="invitation-container">
        <Fade direction={'dowm'} delay={7e3} duration={10000} className="image-nubes">
          <img src="../public/images/nubes.png" alt="" />
        </Fade>
  
        {/* <Fade cascade> */}
          <div className={`background-image ${isLoaded ? 'loaded' : ''}`}>
            <div className="text-container">
              <Fade className="reveal-text euphoria-script-regular text-boy" delay={1e3} cascade damping={3e-1}>
                  Niño
              </Fade>
              <Fade className="reveal-text euphoria-script-regular" delay={2e3} cascade damping={3e-1}>
                  o
              </Fade>
              <Fade className="reveal-text euphoria-script-regular text-girl" delay={3e3} cascade damping={3e-1}>
                  Niña
              </Fade>
              <Fade className="reveal-text euphoria-script-regular text-boy" delay={4e3} cascade damping={3e-1}>
                  ?
              </Fade>
              <Fade className="reveal-text euphoria-script-regular text-girl" delay={5e3} cascade damping={3e-1}>
                  ?
              </Fade>
            </div>
          </div>
        {/* </Fade> */}
  
        <Fade direction={'up'} delay={8e3} duration={10000} className="image-conejo">
          <img src="../public/images/conejo-uno.png" alt="" />
        </Fade>
  
  
        <div className="bubbles-container"  ref={bubblesContainerRef}>
          {/* Las burbujas se generarán dinámicamente aquí */}
        </div>
      </div>
    )
}