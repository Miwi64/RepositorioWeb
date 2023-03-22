import PropTypes from 'prop-types';

const Portada = ({titulo = 'Desarrollo Web 1', fecha='1990'}) => {
    const nuevoMensaje = {
        mensaje: 'Hola desarrollo web',
        title: 'Programacion web'
    } 
  return (
    <div>
      <h1>{titulo}</h1>
      <h3>{fecha}</h3>
      <h4>{nuevoMensaje.title}</h4>
    </div>
  )
}

Portada.propTypes = {
    titulo: PropTypes.string,
    fecha: PropTypes.string
}

export default Portada