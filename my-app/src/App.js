import React from 'react'

import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contacto from "./views/Contacto";
import Nosotros from './views/Nosotros';
import Inicio from './views/Inicio'
import PokeDetails from './views/PokeDetails';
import PokeList from './components/PokeList/PokeList';


const App = () => {
  return (
      <Router>
        <div className='App'>
        <NavBar />
          <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path='/detail/:id' element={<PokeDetails/>}></Route>
        </Routes>
      </div>
    </Router>
    
  )
}

export default App