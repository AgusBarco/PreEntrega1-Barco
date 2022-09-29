import React from 'react';
import Navbar from './content/Navbar';
import Form from './layouts/Form';
import Cards from './layouts/Cards';
import Home from './content/Home';
import Weather from './content/Weather';
import '../styles/App.css'

const App = () => {
    return (
        <>
          <Navbar/>
          <Form busqueda="Buscar producto"/>
          <Cards/>
          <Home/>
          <Weather/>
        </>

    );
}

export default App;
