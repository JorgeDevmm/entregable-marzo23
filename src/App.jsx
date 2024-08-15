
import { useState, useEffect } from 'react';

import Formulario from './components/Formulario';

import Footer from './components/Footer';

function App() {
    // hooks
  // Este código inicializa el estado eventos como un array vacío mediante el uso de useState
  const [eventos, setEventos] = useState([]);
  const [evento, setEvento] = useState({});

  return (

    <div className='bg-[#030303] h-auto min-h-screen flex flex-col items-center'>
    <div className='container mx-auto '>
      <Formulario
        //props
        eventos={eventos}
        setEventos={setEventos}
        evento={evento} /*para cargar al form para la edición */
        setEvento={setEvento} /*Modificar evento en memoria en formulario */
      />
    </div>

    <Footer />
  </div>
  );
}

export default App;
