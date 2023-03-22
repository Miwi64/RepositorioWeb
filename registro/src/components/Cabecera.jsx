import '/src/styles/Cabecera.css'
import React from 'react'

const Cabecera = ({titulo}) => {
  return (
    <div className='header-container'>
        <h1 className='header-container-title'>{titulo}</h1>
    </div>
  )
}

export default Cabecera