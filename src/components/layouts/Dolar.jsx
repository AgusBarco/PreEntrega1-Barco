/*const productos=[
{
    id:1, nombre: "papa", marca: "pepita", precio: 240, stock:30
},
{
    id:1, nombre: "mama", marca: "hojita", precio: 560, stock:46
},
{
    id:1, nombre: "hermano", marca: "pelito", precio: 120, stock:10
},
{
    id:1, nombre: "hermana", marca: "cepillo", precio: 440, stock:12
},

]

const consultaBDD = (habilito) => {
    return new Promise((resolve,reject) => {
        if(habilito){
            resolve(productos)
        } else{reject("No habilitado")}
        
    })
}

(consultaBDD (true)).then(data=>console.log(data))*/


import React, {useState, useEffect} from 'react';


const Dolar = () => {
    const [dolar, setDolar] = useState([]);
useEffect(() => {
    
    const mostrarDolar = () => {
        fetch('https://criptoya.com/api/dolar')
        .then(response => response.json())
        .then(({blue,ccb,ccl,mep}) => {
            setDolar(Object.entries({blue,ccb,ccl,mep}).map((moneda, indice) => <p key={indice}>Tipo: {moneda[0]}, ${moneda[1]}</p>))
        })    
        console.log(dolar)
    }
    mostrarDolar()

    setInterval(() => {
        mostrarDolar()
        console.log("Pase")
    }, 60000)
    

}, []);
    

   
   
    return (
        <>
            {dolar}
        </>
    );
}

export default Dolar;
