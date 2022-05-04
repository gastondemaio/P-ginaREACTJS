import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './paginas';
import Nosotros from './paginas/nosotros';
import Productos from './paginas/productos';
import Contacto from './paginas/contacto';
import Registrarse from './paginas/registrarse';
import ItemListContainer from './components/NavBar/ItemListContainer';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact component={Home} is element={<Home/>} />
        <Route path="/nosotros" component={Nosotros}  is element={<Nosotros/>}/>
        <Route path="/productos" component={Productos}  is element={<Productos/>}/>
        <Route path="/contacto" component={Contacto}  is element={<Contacto/>}/>
        <Route path="/registrarse" component={Registrarse}  is element={<Registrarse/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
