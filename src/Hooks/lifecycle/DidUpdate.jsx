/**
 * Ejemplo de uso de método componentsDidUpdate en componentes de clases
 * y usos de hook en componentes funcionales.
 */

import React, { Component, useEffect} from 'react'

export class DidUpdate extends Component {

  componentDidUpdate(){
    console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}

//_______________________________________________°____________________________________________________


export const DidUpdateHook = () => {

  useEffect(() => {
    console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    
  });

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
} 


