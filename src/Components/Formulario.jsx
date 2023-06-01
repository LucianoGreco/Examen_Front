import React from 'react'

const Formulario = ({setBday, bday, setStyles}) => {
  return (
    <div>
        <label >Paciente</label>
        <input type="text" onChange={(e) => setBday({...bday, name: e.target.value})}/>

        <label >Fecha del turno: </label>
        <input type="date" onChange={(e) => setBday((prevBday) => ({...prevBday, date: e.target.value}))}/>

        <label >Obra Social</label>
        <input type="text" onChange={(e) => setBday((prevBday) => ({...prevBday, guest: e.target.value}))}/>

        <label>Fondo:</label>
        <select onChange={(e) => setStyles((prevStyles) => ({...prevStyles, guest: e.target.value})) }>
            <option value="Psicólogo Fisioterapeuta">Fisioterapeuta</option>
            <option value="Psicólogo clínico">Psicólogo clínico</option>
            <option value="Obstetra/ginecólogo">Obstetra/ginecólogo</option>
            <option value="Pediatra">Pediatra</option>
            <option value="Dentista">Dentista</option>
            <option value="Otorrinolaringólogo">Otorrinolaringólogo</option>
            <option value="Nutricionista">Nutricionista</option>
            <option value="Clinico">Clinico</option>
        </select>


        <button type="submit" onClick={() => setBday((prevBday) => ({...prevBday, guest: e.target.value}))}>Enviar</button>
    </div>
  )
}

export default Formulario