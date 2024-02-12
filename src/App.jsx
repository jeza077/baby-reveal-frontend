
import { Fade } from "react-awesome-reveal";

import nubesImg from './assets/image/nubes.png';
import conejoUnoImg from './assets/image/conejo-uno.png';
import conejoAzulImg from './assets/image/conejo-azul.png';
import clothesImg from './assets/image/clothes.png';
import panalImg from './assets/image/panal.png';
import toallitasImg from './assets/image/toallitas.png';

import "./App.css";
import { useEffect, useRef, useState } from "react";


function useHero() {
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
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Tamaños aleatorios
      const size = Math.floor(Math.random() * 20) + 10; // Tamaño entre 10 y 30 px de ancho y alto (cuadrado)
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Posiciones aleatorias
      const position = Math.random() * 100;
      bubble.style.left = `${position}%`;

      // Tiempos de inicio aleatorios
      const delay = Math.random() * 10;
      bubble.style.animationDelay = `${delay}s`;

      // Color aleatorio entre azul claro y rosa claro
      const randomColor =
        Math.random() < 0.5 ? "rgb(169,205,204)" : "rgb(219,200,204)";
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



function App() {
  
  const { isLoaded, bubblesContainerRef } = useHero();

  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetch("https://baby-reveal.onrender.com/api/people")
    // fetch("http://localhost:5000/api/people")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.error("Error fetching people:", error));
  }, []);

  const handleConfirmation = () => {
    updateStatus(selectedPerson.id, 1); // Envía el estado 1 para confirmar asistencia
  };

  const handleDecline = () => {
    updateStatus(selectedPerson.id, 2); // Envía el estado 2 para indicar que no asistirá
  };

  const updateStatus = (id, status) => {
    console.log({id, status})
    // return;
    fetch(`https://baby-reveal.onrender.com/api/people/${id}/status`, {
    // fetch(`http://localhost:5000/api/people/${id}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message); // Muestra el mensaje de respuesta de la API
        // Aquí puedes agregar lógica adicional si lo deseas, como actualizar el estado local de las personas
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };
  

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    const person = people.find((p) => p.id === selectedId);
    setSelectedPerson(person);
  };

  

  return (
    <>
      <main className="invitation-container">
        <Fade
          direction={"dowm"}
          delay={1e3}
          duration={10000}
          className="image-nubes"
          triggerOnce={true}
        >
          <img src={nubesImg} alt="" />
        </Fade>

        <div className={`background-image ${isLoaded ? "loaded" : ""}`}>
          <div className="text-container">
            <Fade
              className="reveal-text euphoria-script-regular text-boy"
              delay={5e3}
              cascade
              damping={3e-1}
              triggerOnce={true}
            >
              Niño
            </Fade>
            <Fade
              className="reveal-text euphoria-script-regular"
              delay={6e3}
              cascade
              damping={3e-1}
              triggerOnce={true}
            >
              o
            </Fade>
            <Fade
              className="reveal-text euphoria-script-regular text-girl"
              delay={7e3}
              cascade
              damping={3e-1}
              triggerOnce={true}
            >
              Niña
            </Fade>
            {/* <Fade
              className="reveal-text euphoria-script-regular text-boy"
              delay={4e3}
              cascade
              damping={3e-1}
              triggerOnce={true}
            >
              ?
            </Fade>
            <Fade
              className="reveal-text euphoria-script-regular text-girl"
              delay={5e3}
              cascade
              damping={3e-1}
              triggerOnce={true}
            >
              ?
            </Fade> */}
          </div>
        </div>
  

        <Fade
          direction={"up"}
          delay={8e3}
          duration={10000}
          className="image-conejo"
          triggerOnce={true}
        >
          <img src={conejoUnoImg} alt="" />
        </Fade>

        <Fade
          direction={"up"}
          delay={8e3}
          duration={10000}
          className="image-conejo-azul"
          triggerOnce={true}
        >
          <img src={conejoAzulImg} alt="" />
        </Fade>

        <div className="bubbles-container" ref={bubblesContainerRef}>
          {/* Las burbujas se generarán dinámicamente aquí */}
        </div>
      </main>

      <section className="invitation">
        <p>Acompañanos a la Revelación de Género de nuestro bebe</p>
        <h3 className="euphoria-script-regular">Gaby y Alex</h3>
      </section>

      <section className="hour">
        <p>Febrero</p>
        <p>18</p>
        <p>1:00 pm</p>
      </section>

      <section className="address">
        <p><strong>Lugar:</strong> Parque El Picacho</p>
      </section>

      <section className="clothes">
        <img src={clothesImg} alt="baby-clothes" />
        <p>Viste de azul si piensas que será un encantador príncipe, o de rosa si presientes que una hermosa princesita se une a nuestra familia.</p>
      </section>

      <section className="gift">
        <div className="imgs">
          <img src={panalImg} alt="panal-baby" />
          <img src={toallitasImg} alt="toallitas-baby" />
        </div>
        <p>Si crees que el bebé será un niño, ¡te pedimos que traigas pañales! y Si crees que será una niña, ¡que sean toallitas húmedas y llena su armario de dulzura!</p>  
      </section>

      <section className="confirm-attendance">
        <h3 className="euphoria-script-regular">Confirma tu asistencia</h3>
        <form className="form-container">
        <div className="select-container">
          <select onChange={handleSelectChange}>
            <option value="">Selecciona tu nombre</option>
            {people.map((person) => (
              <option key={person.id} value={person.id}>
                {person.name + " " + person.lastname}
              </option>
            ))}
          </select>
        </div>
        <div className="button-container">
          <button type="button" onClick={handleConfirmation}>
            Si asistire
          </button>
          <button type="button" onClick={handleDecline}>
            No asistire
          </button>
        </div>

        </form>
      </section>



    </>
  );
}

export default App;
