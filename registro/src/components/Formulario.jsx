import React from 'react'
import '/src/styles/Formulario.css'

const Formulario = () => {
  return (
    <div className="form-container">
      <form action="">
        <h1 className="form-title">Formulario</h1>
          <label className="form-label" htmlFor="">Nombre</label>
          <input type="text" placeholder='Escribe tu nombre'/>
          <label className="form-label" htmlFor="">Apellidos</label>
          <input type="text" placeholder='Escribe tus apellidos'/>
          <label className="form-label" htmlFor="">Fecha de nacimiento</label>
          <input type="date" name="" id="" />
          <label className="form-label" htmlFor="">Carrera</label>
          <input type="text" placeholder='Escribe tu carrera'/>
          <div className="button-container">
            <input type="button" value="Enviar" />
          </div>
      </form>
    </div>
  )
}

export default Formulario