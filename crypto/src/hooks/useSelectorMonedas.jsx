import React from 'react'
import styled from '@emotion/styled'
import { useState } from 'react';

const useSelectorMonedas = (label, divisas) => {
    const Label = styled.label`
    color: white;
    display: block;
    font-size: 20px;
    font-family: 'Golos Text', sans-serif;
    margin: 15px 0px;`;

    const DropList = styled.select`
    display: block;
    width: 100%;
    padding: 5px;
    font-size: 20px;
    border: none;
    background-color: rgb(39, 39, 114);
    text-align: center;
    border-radius: 8px;
    color: white;
    height: 50px;
    &:focus{
            outline: none;
        }
    `

    const [state, setState] = useState('');

    const SelectorMonedas = () => 
        <>
            <Label>{label}</Label>
            <DropList value={state} onChange={e => setState(e.target.value)}>
                <option value=''>Selecciona una divisa</option>
                {divisas.map(opcion => (<option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>))}
            </DropList>
        </>
    
    return [state, SelectorMonedas];
}

export default useSelectorMonedas