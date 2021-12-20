import styled from 'styled-components';

const Info = styled.p`
  color: black;
`;

const App = () => {
  return (
    <Info>
      Nombre: Alonso Garay <br />
      Descripcion: Estudiante en Make It Real <br />
      Imagen: <br />
      Lista 3 aprendizajes: <br />
      &nbsp;&nbsp;- useContext, useState, useEffect <br />
      &nbsp;&nbsp;- Routes <br />
      &nbsp;&nbsp;- Repaso para configurar el proyecto
    </Info>
  );
};
export default App;
