import React from 'react'

const Tarjeta = ({bday, styles}) => {
    const estilos = {backgroundColor: styles.background, color: styles.color}
  return (
    <div className='tarjeta' style={estilos}>
        <h3>Paciente: {bday.name}</h3>
        <h4>Turno Disponible: {bday.date} a las 17hs</h4>
        <h4>Obra Social: {bday.guest}</h4>
        <p1>Le enviaremos un mail para corroborar el turno</p1>
    </div>
  )
}

export default Tarjeta