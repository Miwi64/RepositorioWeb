import './App.css';
import ImageCrypto from './img/image.png';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';

function App() {
  const Contenedor = styled.div`
    max-width: 900px; 
    margin: 0 auto;
    width: 90%; 
    @media (min-width: 992px){
      display:grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
    }`
  
  const Heading = styled.h1`
    font-family: 'Golos Text', sans-serif; 
    color: white; 
    text-align: center; 
    font-weight: bold; 
    margin-top: 80px; 
    margin-bottom: 50px;
    font-size: 34px;
    &::after{
      content:'';
      width: 100px;
      height: 6px;
      background-color: skyblue;
      display: block;
      margin: 10px auto 0 auto;
    }`
  const Imagen = styled.img`padding-top: 30px; max-width: 300px; margin: 100 auto 0 auto; align-self: center; display: block;`
  return (
  <Contenedor>
    <div>
      <Imagen src={ImageCrypto} alt='Es una imagen de Crypto.'/>
    </div>
    <div>
      <Heading>Cryptomania al instante</Heading>
      <Formulario/>
    </div>
  </Contenedor>)
}

export default App