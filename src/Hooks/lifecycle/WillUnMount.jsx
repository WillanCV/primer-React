/**
 * Ejemplo de uso del componentWillUnMount para componentrs clases
 * Ejemplo de uso de hook para componente funcional
 * (cuando el compneente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

  componentWillUnmount(){
    console.log('Comportamiento antes de que el componente desaparezca')
  }

  render() {
    return (
      <div>
        <h1>
          WillUnMount
        </h1>
      </div>
    )
  }
}

//_____________________________________°______________________________________


export const WillUnMountHook = () => {

  useEffect(() => {
    // Aqui no ponemos nada
    return () => {
      console.log('Comportamiento antes de que el componente desaparezca')
    };
  }, []);

  return (
    <div>
      WillUnMount
    </div>
  );
}
