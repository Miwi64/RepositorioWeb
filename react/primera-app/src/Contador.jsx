import PropTypes from 'prop-types';
import {useState} from 'react'

const Contador = ({contador}) => {
    const [valor, setValor] = useState(contador)
    const handleAdd = event => {
        console.log('+1');
        setValor(valor+1);
    }
    const handleMinus = event => {
        console.log('-1');
        setValor(valor-1);
    }
    const handleReset = event => {
        console.log('0');
        setValor(contador);
    }
    return (
    <div>
        <h1>Contador App</h1>
        <h2>{valor}</h2>
        <button onClick={handleAdd}>
            +1
        </button>
        <button onClick={handleMinus}>
            -1
        </button>
        <button onClick={handleReset}>
            Reset
        </button>
    </div>
  )
}

/* <button onClick={handleAdd}>
            +1
        </button>
Si agregas () a handleAdd, la funcion se disparara automaticamente sin presionar
    el boton
*/

Contador.propTypes = {
    contador: PropTypes.number.isRequired
}

export default Contador 