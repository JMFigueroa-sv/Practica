import React from 'react'
import Cabecera from './Componentes/Cabecera'
import Cuerpo from './Componentes/Cuerpo'
import Pie from './Componentes/Pie'

const App = () => {
  return (
    <div>
      <div>
        <Cabecera></Cabecera>
      </div>
      <div>
        <Cuerpo></Cuerpo>
      </div>
      <div>
        <Pie></Pie>
      </div>
    </div>
  )
}

export default App
