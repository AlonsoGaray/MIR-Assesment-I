import styled from 'styled-components';
import photo from '../../img/photo.jpg';
import calendar from '../../img/calendar.png';
import mail from '../../img/mail.png';
import github from '../../img/github.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MyCard = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: auto;
  max-width: 900px;
  padding: 1em;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 20px;
`;

const Photo = styled.img`
  width: 60%;
  max-width: 500px;
  max-height: 500px;
  margin: auto;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 5em;
  width: 40%;
`;

const H1 = styled.h1`
  color: black;
  font-size: 3em;
  margin: 0.3em 0;
`;

const H3 = styled.h3`
  color: black;
  font-weight: bold;
  margin: ${(props) => props.margin || '0.3em 0'};
`;

const Texto = styled.p`
  color: gray;
  margin: 0.3em 0;
  font-size: 1.1em;
`;

const ContenedorIcono = styled.div`
  display: flex;
  color: black;
  width: 100%;
`;

const Icons = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 5px;
  padding-right: 20px;
`;

const About = () => {
  return (
    <Container>
      <MyCard>
        <Photo src={photo} />
        <Info>
          <Texto>Hola a todos, yo soy</Texto>
          <H1>
            Alonso <br /> Garay
          </H1>
          <H3>FullStack Developer</H3>
          <Texto>
            Soy estudiante, de tiempo completo, en Make It Real Bootcamp. Estoy
            aprendiendo muchos temas para poder consolidarme como un
            desarrollador FullStack, aunque me gusta un poco mas el backend.
          </Texto>
          <ContenedorIcono>
            <a
              href="https://calendar.google.com/event?action=TEMPLATE&tmeid=NmxjamwwbDI3M3U2Z2Y3MmdoazRmdms5ZTFfMjAyMTEyMTkgYWxvbnNvZ2FyYXlwQG0&tmsrc=alonsogarayp%40gmail.com&scp=ALL"
              target="_blank"
              rel="noreferrer"
            >
              <Icons src={calendar} alt="github" />
            </a>
            <H3 margin="none">19 Diciembre 1995</H3>
          </ContenedorIcono>
          <ContenedorIcono>
            <a
              href="https://github.com/AlonsoGaray"
              target="_blank"
              rel="noreferrer"
            >
              <Icons src={github} alt="github" />
            </a>
            <H3 margin="none">AlonsoGaray</H3>
          </ContenedorIcono>
          <ContenedorIcono>
            <Icons src={mail} alt="github" />
            <H3 margin="none">alonsogarayp@gmail.com</H3>
          </ContenedorIcono>
        </Info>
      </MyCard>
      {/* <Info>
        H1: Alonso Garay <br />
        Descripcion: Estudiante en Make It Real <br />
        Imagen: <br />
        Lista 3 aprendizajes: <br />
        &nbsp;&nbsp;- useContext, useState, useEffect <br />
        &nbsp;&nbsp;- Routes <br />
        &nbsp;&nbsp;- Repaso para configurar el proyecto
      </Info> */}
    </Container>
  );
};
export default About;
