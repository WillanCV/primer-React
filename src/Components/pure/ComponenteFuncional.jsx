import React,{ useState, useEffect} from 'react';


const ComponenteFuncional = () => {

  const estadoInicial = {
    fecha: new Date(),
    nombre: 'Willian',
    apellidos: 'Castro Vaga'
  };

  const [estado, setEstado] = useState(estadoInicial);
  const [edad, setEdad] = useState(29);

  const cumple = () => {
    setEdad(edad +1)
  }
  
  useEffect(() => {

    setEstado(estado);

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`
    },1000);
    return () => {
      clearInterval(intervalID)
    
    };
  },[estado]);

  return (
    <div>
      <div>
      <h2>
        Hora Actual:
        {estadoInicial.fecha.toLocaleTimeString()}
      </h2>
      <h3>{estadoInicial.nombre} {estadoInicial.apellidos}</h3>
      <h1>Edad: {edad}</h1>
      <div>
        <button onClick={cumple}>
          Cumplir Años
        </button>
      </div>
    </div>
    </div>
  );
};


export default ComponenteFuncional;

