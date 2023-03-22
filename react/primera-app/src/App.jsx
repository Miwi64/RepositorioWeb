import Contador from "./Contador"
import Horario from "./Horario"
import Portada from "./Portada"

function App() { //Modulo App (notese la mayuscula)
  /*<> --- fragmentos de codigo. acepta multiples hijos*/
  return (
    <div>
      <Portada titulo= 'Hola' fecha='xd'/>
      <Horario/>
      <Contador contador={1}/>
    </div>
  )
}

export default App //importar clase para usarla en otras librerías
