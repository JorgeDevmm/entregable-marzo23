import PropTypes from 'prop-types';

const Correcto = ({children}) => {
  return (
    <div className='text-center bg-green-800 text-white font-bold py-3 mb-2 uppercase rounded-lg'>
      {/* aplicamos prop tipo children */}
      {children}
    </div>
  );
};

// documentación prop
Correcto.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Correcto;
