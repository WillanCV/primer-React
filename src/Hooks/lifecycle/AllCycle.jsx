/**
* Este componente tiene todos los ciclos de vida (lifeCycle)
*/

import React, {useEffect} from 'react';

const AllCycle = () => {

  useEffect(() => {
    console.log('Componente creado')
    
    /**
     * Creando un intervalo de tiempo para que se actualice cada segundo (1000).
     */
    const intervalID = setInterval(() => {
      document.title = `${new Date()}`
      console.log('Actualización del componente')
    },1000);

    return () => {
      console.log('Componente va a desaparecer')
      document.title = 'Tiempo detenido'
      clearInterval(intervalID)
    };
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default AllCycle;
