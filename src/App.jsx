import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import Tarjeta from './Components/Tarjeta'

function App() {

  const [bday, setBday] = useState({
    name: '',
    date: '', 
    guest: ''
  })
  const [styles, setStyles] = useState({
    background: 'transparent',
    color: 'Black'
  })

  return (
    <>
      <Formulario bday={bday} setBday={setBday} setStyles={setStyles}/>
      <Tarjeta bday={bday} styles={styles}/>
    </>
  )
}

export default App
