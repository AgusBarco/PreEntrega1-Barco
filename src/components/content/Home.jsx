import React, {useState, useEffect} from 'react';

const Home = () => {

    const [productos, setProductos] = useState([]);
useEffect( () => {
    const consultarBDD = async () => {
        const response = await fetch ('./json/productos.json')
        const productos = await response.json()
        const cardProducto =productos.map(producto=>
            <div className="card cardProducto" key={producto.id}>
                <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.modelo}</p>
                         <p className="card-text">{producto.marca}</p>
                         <p className="card-text">{producto.precio}</p>
                         <p className="card-text">{producto.stock}</p>
                         
                        <button className='btn btn-dark'>Ver producto </button>
                    </div>
            </div>)
            return cardProducto
        }
   
     consultarBDD().then(producto => setProductos(producto))
   
}, []);
    return (
        <div className="row">
            {productos}
        </div>
    );
}

export default Home;
