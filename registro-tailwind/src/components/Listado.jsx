import Estudiante from './Estudiante'
import React, {useEffect} from 'react'

const Listado = ({estudiantes, setEstudiante, setEliminar}) => {

  return (
    <div className='mt-10 bg-blue-700 p-[20px] md:w-3/5 rounded-md md:h-screen text-[#FFF] md:overflow-y-scroll'>
      <h1 className='font-bold text-center text-xl'>Listado de estudiantes</h1>
      <h2 className='font-bold text-center'>Administra estudiantes</h2>
      
      {estudiantes.map((estudiante) => <Estudiante key={estudiante.id} estudiante={estudiante} setEstudiante={setEstudiante} setEliminar={setEliminar}/>)}
    </div>
  )
}

export default Listado