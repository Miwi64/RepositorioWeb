import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { RingLoader } from 'react-spinners';
import useSelectorMonedas from '../hooks/useSelectorMonedas';
import {monedas} from '../data/monedas';
import Error from '../components/Error';
import Resultado from './Resultado';

const InputSubmit = styled.input`
    font-family: 'Golos Text', sans-serif; 
    background-color: purple;
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    border-radius: 10px;
    color: white;
    text-transform: uppercase;
    transition: background-color .3s ease;
    &:hover{
        background-color: darkblue;
        cursor: pointer;
    }
`
 
const ResultContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    transition: scale .3s ease;
    &:hover{
      scale: 1.1;
    }
`

const Formulario = () => {
  const [cryptos, setCryptos] = useState([]);
  const [cotizacion, setCotizacion] = useState({});
  const [excepcion, setExcepcion] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const arreglo = resultado.Data.map(crypto => {const objeto = {id:crypto.CoinInfo.Name, nombre: crypto.CoinInfo.Name}; return objeto});
      setCryptos(arreglo);
    }
    consultarApi();
  }, [])
  

  const manejadorSubmit = e => {
    e.preventDefault();
    if(moneda === cotizacion.moneda && criptomoneda === cotizacion.criptomoneda){
      return;
    }
    setCotizacion({});
    if([moneda, criptomoneda].includes('')){
      console.log('Error 404');
      setError(true);
      return;
    }
    setError(false);
    cotizar(criptomoneda, moneda);
  }


  const cotizar = async (criptomoneda, moneda) => {
    try {
      setCargando(true);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      const datos = Object.values(Object.values(resultado.DISPLAY)[0])[0];
      const urlAssets = `https://data-api.cryptocompare.com/asset/v1/data/by/symbol?asset_symbol=${criptomoneda}`;
      const respuestaAssets = await fetch(urlAssets);
      const resultadoAssets = await respuestaAssets.json();
      datos.img = resultadoAssets.Data.LOGO_URL;
      setCargando(false);
      setExcepcion(false);
      const objeto = {criptomoneda, moneda, valor: datos.PRICE, inicio: datos.OPENDAY, bajo: datos.LOWDAY, img: datos.img};
      setCotizacion(objeto);
    } catch (error) {
      console.error('Error al cargar los datos');
      setCargando(false);
      setExcepcion(true);
    }
  }

  const [error, setError] = useState(false);
  const [moneda, SelectorMoneda] = useSelectorMonedas('Elige tu moneda', monedas);
  const [criptomoneda, SelectorCriptomoneda] = useSelectorMonedas('Elige tu criptomoneda', cryptos);
  return (
    <>
      {error && (<Error>Debe llenar todos los campos</Error>)}
      <form onSubmit={manejadorSubmit}>
        <SelectorMoneda/>
        <SelectorCriptomoneda/>
        <InputSubmit type="submit" value="Cotizar" />
      {cotizacion.criptomoneda && 
        (<ResultContainer>
            <Resultado cotizacion={cotizacion} setCotizacion={setCotizacion}/>
        </ResultContainer>)
      }
      {cargando &&
        <ResultContainer>
          <RingLoader size={150} color={"purple"} loading={cargando} />
        </ResultContainer>
      }
      {excepcion && (<Error>Error al cargar los datos</Error>)}
      </form>
    </>
  );
}

export default Formulario