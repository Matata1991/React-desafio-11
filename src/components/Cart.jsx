import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { cartContext } from '../context/cartContext';
import { getFirestore } from '../servicios/getFirebase';
import firebase from 'firebase/compat/app';



const Cart = () => {
    const [ formData, setFormData ] = useState({
        name: '',
        tel: '',
        email: '',
        email2: ''
    })

    const { cartList, totalPrecios, eliminarDelCarrito } = useContext(cartContext)

    function handleOnChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()

        

        let orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate( new Date() );

        orden.buyer = formData

        orden.total = totalPrecios()

        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.titulo;
            const price = cartItem.item.precio * cartItem.cantidad;
            
            return {id, title, price}   
        })

        const db = getFirestore()
        db.collection('orders').add(orden)
        .then(resp => alert('Gracias por tu compra !! Tu id de compra es: ' +  resp.id))
        .catch(err=> console.log(err))
        .finally(()=>
        setFormData({
            name: '',
            tel: '',
            email: '',
            email2:''
        }) 
        //borrarLista()
    )




        //const ordersColumn = db.collection('orders')
        //const db= getFirestore();
        //const ordersColumns = db.collection('orders');
    }
    const CarritoVacio=  <> 
                            <center>
                            <h1>El carrito se encuentra vacio! </h1>
                            <Link to='/'>
                                <Button variant="primary">Ir a comprar!!</Button>
                            </Link> 
                            </center>
                        </>

        if (cartList.length === 0) return CarritoVacio;

    return (
        <div>
            <center>
            { cartList.map(item => <h2>Producto: {item.item.titulo}<br/> 
            Descripcion: {item.item.descripcion}<br/>
            Precio: {item.item.precio}<br/>
            Cantidad: {item.cantidad}<br/>
            <Button onClick={() => {eliminarDelCarrito(item)}} variant="primary">Eliminar item</Button>
            </h2>)
            }
            <h3>Precio total: {totalPrecios()}</h3>
            <center>
            <br />
            </center>
            <form 
                                onSubmit={handleOnSubmit}
                                onChange={handleOnChange}
                            >
                                <input 
                                    type='text' 
                                    placeholder='ingrese el nombre' 
                                    name='name'
                                    value={formData.name} 
                                />  
                                <input 
                                    type='text' 
                                    placeholder='ingrese el nro de tel' 
                                    name='tel' 
                                    value={formData.tel}
                                />  
                                <input 
                                    type='text' 
                                    placeholder='ingrese el email' 
                                    name='email' 
                                    value={formData.email}    
                                />  
                                <input 
                                    type='text' 
                                    placeholder='Confirme el mail ' 
                                    name='email2' 
                                    value={formData.email2}  
                                />  
                                <button>Terminar Compra</button>
                            </form>

            </center>
        </div>
    )
}

export default Cart

