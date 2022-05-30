import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import Navbar from "./components/Navbar/navbar"

//Views
import Inicio from './views/Inicio/Inicio'
import ItemDetails from './views/ItemDetails/ItemDetails';
import Contacto from "./views/Contacto/Contacto";
import Carrito from "./views/Carrito/Carrito"


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path='/details/:id' element={<ItemDetails/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
    </Router>
  )
}

export default App