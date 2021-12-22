import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Header.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 1400px;
`;

const Logo = styled.div`
  display: flex;
  width: 20%;
`;

const Texto = styled.h2`
  margin: 1em;
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <Texto>Fake Store Garay</Texto>
      </Logo>
      <Links>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="about">
          About
        </Link>
      </Links>
    </Container>
  );
};

export default Header;
