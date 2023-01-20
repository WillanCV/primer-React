import React, {useState} from 'react';
import PropTypes from 'prop-types';

const GreetingF = (props) => {

  //Breve introducion a useState
  //Es practica mente una funcion que nos permite crear un estado privado
  //const [variable, metodo para actualizarlo] = useState(valor inicial)
  const [age, setage] = useState(43);

  const birthday = () => {
    //Actualizamos el State
    setage(age+1)
  }

  return (
    <div>
      <h1>
        !HOLA { props.name } desde componente funcionale¡
      </h1>
      <h2>
        Tu edad es : {age}
      </h2>
      <div>
        <button onClick={birthday}>
          Cumplir años
        </button>
      </div>
    </div>
  );
};


GreetingF.propTypes = {
name:PropTypes.string
};


export default GreetingF;



