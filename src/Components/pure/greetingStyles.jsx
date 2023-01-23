import React, { useState } from 'react';

// Definiendo estilos en constantes:

// ? Estilos para usuarios logueados

const loggedStyle = {
  color: 'blue'
}

// ? Estilos para usuarios no logueados

const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold'
}

const GreetingStyles = (props) => {

  //Generamos un estado para el componente
  //y así controlamos si el usuario está o no conectado

  const [logged, setLogged] = useState(false);

  return (
    <div style={ logged ? loggedStyle : unloggedStyle }>
      { logged ? <p>Hola, { props.name }</p> : <p>Please Login</p> }
      
      <button onClick={() => {
        console.log('Boton pulsado');
        setLogged(!logged);
      }}>
        { logged ? 'logout' : 'login' }
      </button>
    </div>
  );
}

export default GreetingStyles;
