import React, { useEffect, useState } from 'react'

const Formulario = ({estudiantes, setEstudiantes, estudiante, setEstudiante}) => {
  const [nombre,setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [promedio, setPromedio] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(estudiante).length>0){
      const {nombre, carrera, semestre, promedio} = estudiante;
      setNombre(nombre);
      setCarrera(carrera);
      setSemestre(semestre);
      setPromedio(promedio);
    }
    else{
      limpiar();
    }
  }, [estudiante])

  const generarID = () =>{
    const fecha = Date.now().toString(36);
    const random = (Math.random()).toString(36).substring(2);
    return random + fecha;
  }
  

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if([nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('')){
      setError(true);
      return;
    }
    setError(false);
    if(isNaN(semestre) || isNaN(promedio)){
      return;
    }
    const objetoEstudiante = {nombre, carrera, semestre, promedio};
    if(estudiante.id){
      objetoEstudiante.id = estudiante.id;
      const estudiantesActualizados = estudiantes.map(estudianteState => estudiante.id === estudianteState.id ? objetoEstudiante : estudianteState);
      setEstudiantes(estudiantesActualizados);
      setEstudiante({});
    } else{
      objetoEstudiante.id = generarID();
      setEstudiantes([...estudiantes,objetoEstudiante]);
    }
    limpiar();
  }

  const limpiar = () =>{
    setNombre('');
    setCarrera('');
    setSemestre('');
    setPromedio('');
  }

  return (
    <div className='bg-blue-500 p-[20px] md:w-2/5 h-full mt-10 rounded-md text-[#FFF]'>
      <h1 className='font-bold text-center text-xl'>Registrar Estudiantes</h1>
      <h2 className='font-bold text-center'>Agrega y administra</h2>
      <form onSubmit={manejadorSubmit}>
        {error && (<div className='p-3 bg-red-500 rounded-md text-center my-5'><p className='text-lg font-bold'>Llenar todos los campos</p></div>)}
        <div>
          <label className='block mb-4 mt-7' htmlFor="">Nombre completo</label>
          <input className='p-2 border-2 w-full rounded-md text-black' type="text" placeholder='Nombre completo' value={nombre} onChange = {(e) => setNombre(e.target.value)}/>
        </div>

        <div>
          <label className='block mb-4 mt-7' htmlFor="">Carrera</label>
          <input className='p-2 border-2 w-full rounded-md text-black' type="text" placeholder='Carrera' value={carrera} onChange = {(e) => setCarrera(e.target.value)}/>
        </div>

        <div>
          <label className='block mb-4 mt-7' htmlFor="">Semestre</label>
          <input className='p-2 border-2 w-full rounded-md text-black' type="text" placeholder='Semestre' value={semestre} onChange = {(e) => setSemestre(e.target.value)}/>
          {isNaN(semestre) && (<p className='text-yellow-300'>El valor introducido no es numerico</p>)}
        </div>

        <div>
          <label className='block mb-4 mt-7' htmlFor="">Promedio</label>
          <input className='p-2 border-2 w-full rounded-md text-black' type="text" placeholder='Promedio' value={promedio} onChange = {(e) => setPromedio(e.target.value)}/>
          {isNaN(promedio) && (<p className='text-yellow-300'>El valor introducido no es numerico</p>)}
        </div>
        <div>
          <input className='mt-8 rounded-md w-full p-2 uppercase bg-green-500 hover:bg-green-800 cursor-pointer' type='submit' value={estudiante.id? "Editar" : "Agregar"}/>
        </div>
      </form>
    </div>
  )
}

export default Formulario