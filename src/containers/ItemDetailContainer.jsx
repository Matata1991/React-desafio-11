import { useState, useEffect } from "react"
import ItemDetail from "../components/ItemDetail"
import { get } from '../Utils/Mock';
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        get
        .then((respuesta) => {
            if(id) {
                const prodFiltrado = respuesta.filter((producto) => producto.id === parseInt(id))
                setProducto(prodFiltrado)
            }else {
                setProducto(respuesta)
            }
            })
            .catch(error => console.log(error))
            .finally(() => setCargando(false))
        }, [id])
    return (
        <div>
            {cargando ? <h2>Cargando...</h2> : producto && <ItemDetail key={producto[0].id} producto={producto[0]}/>}
        </div>
    )
}

export default ItemDetailContainer
