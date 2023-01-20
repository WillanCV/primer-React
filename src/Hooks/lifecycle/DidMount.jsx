/**
 * Ejemplo de uso de método
 * de ciclo de vida en componente de clase y el hook de de ciclo de vida 
 * en componentes funcionales
 */

import React, { Component, useEffect } from 'react';

/**
 * Componente de tipo clase
 */
export class DidMount extends Component {

  componentDidMount(){
    console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
  }

  render() {
    return (
      <div>
        <h1> DidMount</h1>
      </div>
    );
  }
}

//_____________________________________________°___________________________________________________

/**
 * Componente tipo función (El utilizado), replicando el tipo clase anterior.
 */
export const DidMountHook = () => {

  useEffect(() => {
    console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    
  }, []);
  /**
   * El corchete [] vasio indica que se va ejecutar una sola vez.
   * si no indicamos nada (sin []) se ejecutara todas las veces 
   */

  return (
    <div>
       <h1> DidMount</h1>
    </div>
  );
}

export default DidMount;
