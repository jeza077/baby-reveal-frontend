import { useEffect, useRef, useState } from "react";

export function useHero() {
  const [isLoaded, setIsLoaded] = useState(false); // Nuevo estado para controlar si la imagen de fondo ya se cargó
  const bubblesContainerRef = useRef(null); // Referencia al contenedor de burbujas para generarlas dinámicamente en el useEffect
  // const [bubblesGenerated, setBubblesGenerated] = useState(false); // Nuevo estado para controlar si las burbujas ya se generaron
  // const bubblesGeneratedRef = useRef(false); // Referencia para controlar si las burbujas ya se generaron

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {

      // console.log('es false', bubblesGeneratedRef.current)
      // console.log(bubblesGeneratedRef.current)

      const bubblesContainer = bubblesContainerRef.current;
      if (!bubblesContainer || bubblesContainer.children.length > 0) return;
  
      // Número de burbujas
      const numberOfBubbles = 100;
  
      // Generar burbujas
      for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
  
        // Tamaños aleatorios
        const size = Math.floor(Math.random() * 30) + 10; // Tamaño entre 10 y 30 px de ancho y alto (cuadrado) 
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
  
        // Posiciones aleatorias
        const position = Math.random() * 100; 
        bubble.style.left = `${position}%`;
  
        // Tiempos de inicio aleatorios
        const delay = Math.random() * 10; 
        bubble.style.animationDelay = `${delay}s`;
  
        // Color aleatorio entre azul claro y rosa claro
        const randomColor = Math.random() < 0.5 ? 'rgb(169,205,204)' : 'rgb(219,200,204)';
        bubble.style.backgroundColor = randomColor;
  
        // Añadir burbuja al contenedor
        bubblesContainer.appendChild(bubble);
      }
  
      // Marcamos que las burbujas ya se han generado
      // bubblesGeneratedRef.current = true;
      // console.log(bubblesGeneratedRef.current)
    
  }, []);
    // Observa el estado bubblesGenerated y registra si cambia
    // useEffect(() => {
    //   console.log("bubblesGenerated cambió:", bubblesGenerated);
    // }, [bubblesGenerated]);

    return { isLoaded, bubblesContainerRef };
}