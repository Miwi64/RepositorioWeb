import styled from '@emotion/styled'
import React from 'react'

const Resultado = ({cotizacion, setCotizacion}) => {

  const Contenedor = styled.div`
    background-color: rgb(39, 39, 114);
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    text-align:center;
    box-shadow: 5px rgba(0,0,0,0.05);
  `
  const Grid = styled.div`
     @media (min-width: 992px){
      display:grid;
      grid-template-columns: 1fr 2fr;
    }`
  const Texto = styled.p`
    font-family: 'Golos Text', sans-serif;
    font-size: 20px;
    color: white;
  `
  const Titulo = styled.h1`
    font-family: 'Golos Text', sans-serif;
    font-size: 30px;
    color: white;
    `
    const Boton = styled.button`
        font-family: 'Golos Text', sans-serif;
        font-size: 20px;
        color: white;
        border-radius: 10px;
        padding: 5px;
        width:80%;
        background-color: rebeccapurple;
        transition: background-color 0.3s ease;
        border: none;
        &:hover{
            background-color: #8c46d2
        }
    `
    const ContenedorImagen = styled.div`
        display: flex;
        justify-content: center;
        align-items: flex-start;
    `
    const Imagen = styled.img`
        width: 50%; 
        @media (min-width: 992px){
            width:90%;
        }`

  return (
    <Contenedor>
        <Grid>
            <ContenedorImagen>
                <Imagen src={cotizacion.img}/>
            </ContenedorImagen>
            <div>
                <Titulo>Ahora: {cotizacion.valor}</Titulo>
                <Texto>Inicio el dia en: {cotizacion.inicio}</Texto>
                <Texto>Valor mas bajo: {cotizacion.bajo}</Texto>
            </div>
        </Grid>
        <Boton onClick={e => setCotizacion({})}>Cerrar</Boton>
    </Contenedor>
  )
}
export default Resultado