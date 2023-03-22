import './App.css'
import Cabecera from './components/Cabecera'
import Formulario from './components/Formulario'
import Registros from './components/Registros'

function App() {
  return (
    <>
        <div className='app-name-container'>
          <Cabecera titulo="Registro Estudiantes"/>
        </div>
        <div className='flex-parent-container'>
          <div className="flex-form-container">
            <Formulario/>
          </div>
          <div className="flex-reg-container">
            <Registros />
          </div>
        </div>
    </>
  )
}

export default App
