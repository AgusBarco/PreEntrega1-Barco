import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Cards from './components/Cards';
import './App.css'

const App = () => {
    return (
        <>
          <Navbar/>
          <Form busqueda="Buscar producto"/>
          <Cards/>
          
        </>

    );
}

export default App;
