import PropTypes from 'prop-types';
import Error from './Error';
import Correcto from './Correcto';
import { useState, useEffect } from 'react';

const Formulario = ({ eventos, setEventos, evento, setEvento }) => {
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Efecto para cargar los datos del evento cuando se edita
  useEffect(() => {
    if (Object.keys(evento).length > 0) {
      setNombre(evento.nombre);
      setContacto(evento.contacto);
    }
  }, [evento]);

  // Validación de campos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del Formulario
    if ([nombre, contacto].includes('')) {
      setError('Por favor chequea que la información sea correcta.');
      setSuccess('');
      return;
    }

    if (nombre.length > 3) {
      setError('El nombre debe tener igual o menos de 3 caracteres.');
      setSuccess('');
      return;
    }

    if (contacto.length <= 6) {
      setError('El contacto debe tener más de 6 caracteres.');
      setSuccess('');
      return;
    }

    // Si pasa las validaciones
    setError('');
    setSuccess('Formulario enviado correctamente.');

    // Objeto de Evento
    const objetoEvento = {
      id: evento.id ? evento.id : new Date().getTime(),
      nombre,
      contacto,
    };

    if (evento.id) {
      // Editando un evento existente
      const eventosActualizados = eventos.map((ev) =>
        ev.id === evento.id ? objetoEvento : ev
      );
      setEventos(eventosActualizados);
      setEvento({});
    } else {
      // Agregando un nuevo evento
      setEventos([...eventos, objetoEvento]);
    }

    // Reiniciando el formulario
    setNombre('');
    setContacto('');
  };

  return (
    <div className='bg-[#353737] rounded-l-lg min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-center pt-2 text-xl lg:text-4xl font-bold text-white'>
        FORMULARIO
      </h1>
      <p className='text-center text-lg mt-2 text-white mb-2'>
        INGRESAR NOMBRE Y {''}
        <span className='text-rose-600 font-bold'> EVENTO</span>
      </p>

      <form
        onSubmit={handleSubmit}
        action=''
        className='text-white shadow-md py-5 px-5 md:w-3/4 lg:w-3/5 mx-auto rounded-xl'
      >
        {/* Mostrar mensaje de error o éxito */}
        {error && (
          <Error>
            <p>{error}</p>
          </Error>
        )}
        {success && (
          <Correcto>
            <p>{success}</p>
          </Correcto>
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
          className='py-3 bg-[#2D44F5] text-white font-bold text-lg rounded-lg inline-block w-full hover:bg-[#2c76ffef] transition-colors'
          value={evento.id ? 'Editar Evento' : 'Enviar'}
        />
      </form>
    </div>
  );
};

// Documentación prop
Formulario.propTypes = {
  eventos: PropTypes.array.isRequired,
  setEventos: PropTypes.func.isRequired,
  evento: PropTypes.object.isRequired,
  setEvento: PropTypes.func.isRequired,
};

export default Formulario;