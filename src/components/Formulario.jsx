import PropTypes from 'prop-types';
import Error from './Error';

import { useState, useEffect } from 'react';

const Formulario = ({ eventos, setEventos, evento, setEvento }) => {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');

  const [error, setError] = useState(false);


  // validación de campos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, contacto].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de Evento
    const objetoEvento = {
      nombre,
      contacto,

    };


    // reiniciando el formulario
    setNombre('');
    setContacto('');
  };

  return (
    <div className='bg-[#353737] md:w-100 lg:w-100 rounded-l-lg '>

      <h1 className='text-center pt-2 text-xl lg:text-4xl font-bold text-white'>
        FORMULARIO
      </h1>
      <p className='text-center text-lg mt-2 text-white mb-2'>
        INGRESAR NOMBRE Y {''}
        <span className='text-rose-600 font-bold '> EVENTO</span>
      </p>

      <form
        onSubmit={handleSubmit} /*asociar función a evento*/
        action=''
        className=' text-white shadow-md py-5 px-5 md:w-4/5 lg:w-11/12 mx-auto rounded-xl'
      >
        {/* validando error y aplicando props tipo children */}
        {error && (
          <Error>
            <p>Por favor chequea que la información sea correcta</p>
          </Error>
        )}
        <div className='mb-3'>
          <label htmlFor='nombre' className='font-bold block text-stone-300'>
            Ingresar Nombre
          </label>
          <input
            type='text'
            id='nombre'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            placeholder='Ingresar Nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='contacto' className='font-bold block text-stone-300'>
            Enviar
          </label>
          <input
            type='text'
            id='contacto'
            className='border-2 p-3 mt-2 rounded-md w-full placeholder-gray-400 bg-[#1D1D1D]'
            placeholder='Ingresar evento'
            value={contacto}
            onChange={(e) => setContacto(e.target.value)}
          />
        </div>


        <input
          type='submit'
          className='py-3 bg-[#2D44F5] text-white font-bold text-lg rounded-lg inline-block  w-full hover:bg-[#2c76ffef] transition-colors'
          // valida el value de que mostrar de acuerdo si existe el id
          value={evento.id = 'Enviar'}
        />
      </form>
    </div>
  );
};

// documentación prop
Formulario.propTypes = {
  eventos: PropTypes.array.isRequired,
  setEventos: PropTypes.func.isRequired,
  evento: PropTypes.object.isRequired,
  setEvento: PropTypes.func.isRequired,
};

export default Formulario;
