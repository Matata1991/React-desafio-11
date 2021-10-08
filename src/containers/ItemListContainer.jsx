import React, { useState, useEffect }  from 'react'
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom";
import { getFirestore } from '../servicios/getFirebase';

function ItemListContainer() {
    
     const [productos, setProductos] = useState([])
     const [cargando, setCargando] = useState(true)
     const { idCategoria } = useParams()

   useEffect(() => {

    if (idCategoria) {
      const BaseDatos = getFirestore()

      BaseDatos.collection('items').where('categoria', '==', idCategoria).get()
      .then(respuesta => {
        setProductos(respuesta.docs.map(producto => ( { id: producto.id, ...producto.data() } )))
      })
      .catch(error => console.log(error))
      .finally(() => setCargando(false))
      } else {
        const BaseDatos = getFirestore()

        BaseDatos.collection('items').get()
        .then(respuesta => {
          setProductos(respuesta.docs.map(producto => ( { id: producto.id, ...producto.data() } )))
        })
        .catch(error => console.log(error))
        .finally(() => setCargando(false))
      }
    }
    , [idCategoria])

      
    return (
        <>
        <div>
            {cargando ? <h2>Cargando...</h2> : <ItemList productos={productos}/>}
        </div>
        </>
      )
}
export default ItemListContainer
