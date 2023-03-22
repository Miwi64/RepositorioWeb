import PropTypes from 'prop-types'
import {useState} from 'react'

const Formulario = ({lado, base, altura}) => {
    const [valor, setValor] = useState(0);
    const handleSquare = event => {
        setValor(lado*lado);
    }
    const handleRectangle = event => {
        setValor(base*altura);
    }
    const handleTriangle = event => {
        setValor((base*altura)/2);
    }
    const handleErase = event => {
        setValor(0);
    }
  return (
    <div class = "main-container">
        <h1>Formulario basico</h1>
        <div class="result-container">
            <p>Area</p>
            <h2>{valor}</h2>
        </div>
        <div class="values-container">
            <p>Base: {base}</p>
            <p>Altura: {altura}</p>
            <p>Lado: {lado}</p>
        </div>
        <button onClick={handleSquare}>Cuadrado</button>
        <button onClick={handleRectangle}>Rectangulo</button>
        <button onClick={handleTriangle}>Triangulo</button>
        <button class="erase-button" onClick={handleErase}>Borrar</button>
    </div>
  )
}

Formulario.propTypes = {
    lado: PropTypes.number.isRequired,
    altura: PropTypes.number.isRequired,
    base: PropTypes.number.isRequired
}

export default Formulario