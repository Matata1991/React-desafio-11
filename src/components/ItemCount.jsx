import {useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);
    const [cambiarBoton, setCambiarBoton] = useState(true);


    function suma() {
        if(count < 5){
            setCount(count + 1) 
        }
    }
    function resta() {
        if(count > 0){
            setCount(count - 1) 
        }
    }
    function agregarAlCarrito(){
        if(count > 0){
            onAdd(count)
            setCambiarBoton(false)
        }
    }
    return (
        <div>
                <Card.Title >Agregados { count }</Card.Title>
                <Button onClick={resta} variant="primary">-</Button>
                { cambiarBoton ? 
                    <Button onClick={agregarAlCarrito} variant="primary">Agregar Carrito</Button>

                    :
                    <div>
                    <Link to={ '/carrito' }>
                        <Button variant="primary">Finalizar Compra</Button>                    
                    </Link>
                    <Link to={ '/' }>
                        <Button variant="primary">Seguir comprando</Button>                    
                    </Link>
                    </div>
                }
                <Button onClick={suma} variant="primary">+</Button>
        </div>
    )
}

export default ItemCount
