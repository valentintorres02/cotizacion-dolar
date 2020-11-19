import React, {useState, useEffect} from 'react'
import Page from './Page'
import Conversion from './Conversion'

function App() {

  const [cotizacionBlue, setCotizacionBlue] = useState([]);
  const [cotizacionOficial, setCotizacionOficial] = useState([]);

  useEffect(() => {

    fetch('https://api-dolar-argentina.herokuapp.com/api/dolarblue')
    .then(blue => blue.json())
    .then(blue => setCotizacionBlue(blue));
  }, [])
  
 useEffect(() => {
   fetch('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
   .then(oficial => oficial.json())
   .then(oficial => setCotizacionOficial(oficial))
 }, [])


  return (
    <div>
      <h1>Cotización dólar blue:</h1>
      <br></br>
      <Page data={{cotizacion: {...cotizacionBlue}}}/>
      <h1>Cotización dólar oficial:</h1>
      
      <Page data={{cotizacion: {...cotizacionOficial}}}/>
    </div>
  )
}

export default App
