import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderG = styled.header`
  background-color: green;
`;

const Header = () => {
  return (
    <HeaderG>
      <Link className="header_a" to="/">
        Home
      </Link>
      <Link className="header_a" to="about">
        About
      </Link>
    </HeaderG>
  );
};

export default Header;
