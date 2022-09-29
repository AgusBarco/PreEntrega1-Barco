import React from 'react';
import Form from '../layouts/Form';
import Dropdown from '../layouts/Dropdown';
import Secciones from '../layouts/Secciones';
import Icons from '../layouts/Icons';

const Navbar = () => {
    const listDrowdon=["Cuadros", "Neon"]
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <Secciones/>
                        <Dropdown lista={listDrowdon}/>
                        <Icons/>
                    </ul>
                    <Form busqueda="Buscar producto"/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 
