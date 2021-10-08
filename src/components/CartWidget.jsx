import React, { useContext } from 'react'
import { cartContext } from '../context/cartContext';

export const CartWidget = () => {
    
    const { cartIcon, cartList } = useContext(cartContext)
    
        return (
            <div>{cartList.length !== 0 ?  <div><img src="/carrito.svg" alt="Logo" width="30" height="40"/> {cartIcon()}</div>: <div/>}</div>       
        )
}
export default CartWidget
