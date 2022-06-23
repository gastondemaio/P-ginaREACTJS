import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from "./header/Navbar/navbar"
import Cart from "./components/body/cart/Cart";
import Contact from "./components/body/contact/Contact";
import ItemDetailContainer from "./components/body/itemDetail/ItemDetailContainer";
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/body/itemList/ItemListContainer';



const App = () => {
  return (
    <Router>
        <CartProvider>
        <div className="App">
        <Navbar />
          <Routes>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/products/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/">
              <ItemListContainer />
            </Route>
          </Routes>
        </div>
      </CartProvider> 
    </Router>

  )
}

export default App