import React from 'react'
import UseLenis from './Hooks/UseLenis'
import Mainroutes from './Routes/Mainroutes'


const App = () => {
  UseLenis()
  return (
    <div>
      <Mainroutes/>
    </div>
  )
}

export default App;
