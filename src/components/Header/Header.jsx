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

const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link className="nav" to="/">
          Fake Store Garay
        </Link>
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
