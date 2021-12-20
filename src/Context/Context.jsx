import { useMemo, createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const IdContext = createContext();

export const NumberProvider = ({ children, value = 0 }) => {
  const [number, setNumber] = useState(value);

  NumberProvider.propTypes = {
    children: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const valuesToPass = useMemo(() => ({ number, setNumber }));

  return (
    <IdContext.Provider value={valuesToPass}>{children}</IdContext.Provider>
  );
};

export const useStateNumber = () => {
  const context = useContext(IdContext);

  if (context === undefined) {
    throw new Error('useStateNumber must be used within a NumberProvider');
  }

  return context;
};
