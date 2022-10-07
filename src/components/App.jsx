import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react';
import Navbar from './content/Navbar';
import Home from './content/Home';
import Carrito from './content/Carrito';
import '../styles/App.css'
import About from './content/About';
import Contacto from './content/Contacto';
import Producto from './content/Producto';
import Footer from './content/Footer';
import Categoria from './content/Categoria';
const App = () => {
    return (
        <>     
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route path="/" element ={<Home/>} />
                <Route path="/producto/:id" element ={<Producto/>} />
                <Route path="/categoria/:id" element ={<Categoria/>} />
                <Route path="/about" element ={<About/>} />
                <Route path="/contacto" element ={<Contacto/>} />
                <Route path="/carrito" element ={<Carrito/>} />

              </Routes>
            <Footer/>
          </BrowserRouter>
        </>

    );
}

export default App;
