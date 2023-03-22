import './App.css'
import Header from './components/header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { useEffect, useState } from 'react'

function App() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudiante, setEstudiante] = useState({});
  const [eliminar, setEliminar] = useState('');

  
  useEffect(() => {
    if(eliminar !== ''){
      setEstudiantes(estudiantes.filter(estudiante => estudiante.id !== eliminar));
      if(estudiante.id === eliminar){
        setEstudiante({});
      }
      setEliminar('');
    }
  }, [eliminar])

  return (
    <div className='container mx-auto'>
      <Header/>
      <div className='md:flex gap-4 md:px-10'>
        <Formulario estudiantes = {estudiantes} setEstudiantes={setEstudiantes} estudiante={estudiante} setEstudiante={setEstudiante}/>
        <Listado estudiantes={estudiantes} setEstudiante={setEstudiante} setEliminar={setEliminar}/>
      </div>
    </div>
  )
}
export default App
