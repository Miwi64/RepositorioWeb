import React from 'react'

const Estudiante = ({estudiante, setEstudiante, setEliminar}) => {
  const {nombre,carrera,semestre,promedio} = estudiante;

  return (
    <div className='bg-blue-400 p-3 py-10 shadow-md rounded-md mt-10'>
    <p className='font-bold mb-3 uppercase'>Nombre: <span className='font-normal ml-3 normal-case'>{nombre}</span></p>
    <p className='font-bold mb-3 uppercase'>Carrera: <span className='font-normal ml-3 normal-case'>{carrera}</span></p>
    <p className='font-bold mb-3 uppercase'>Semestre: <span className='font-normal ml-3 normal-case'>{semestre}</span></p>
    <p className='font-bold mb-3 uppercase'>Promedio: <span className='font-normal ml-3 normal-case'>{promedio}</span></p>
    <div className='text-center'>
    <button onClick={() => setEstudiante(estudiante)} type='button' className='py-3 px-10 mx-2 rounded-md uppercase bg-yellow-500 hover:bg-orange-600 cursor-pointer'>Modificar</button>
    <button onClick={()=>{setEliminar(estudiante.id)}} type='button' className='py-3 px-10 mx-2 rounded-md uppercase bg-red-500 hover:bg-red-800 cursor-pointer'>Eliminar</button>
    </div>
  </div>
  )
}

export default Estudiante