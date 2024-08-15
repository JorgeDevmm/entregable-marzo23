import PropTypes from 'prop-types';

const Error = ({children}) => {
  return (
    <div className='text-center bg-red-800 text-white font-bold py-3 mb-2 uppercase rounded-lg'>
      {/* aplicamos prop tipo children */}
      {children}
    </div>
  );
};

// documentación prop
Error.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Error;
