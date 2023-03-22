import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: red;
    color: white;
    font-family: 'Golos Text', sans-serif;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    padding: 20px 0;
`

const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error