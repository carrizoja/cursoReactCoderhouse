import React, { useCallback, useContext } from 'react'
import {useCartContext } from '../../CartContext/CartContext'


function Cart() {

const {cartList, borrarCarrito} = useCartContext()

    return (
        <div>
            {cartList.map(prod => <div className="card w-100 mt-4">
                <h2 style={{color: "black"}}>{prod.name}</h2>
                <h2 style={{color: "black"}}>Cantidad: {prod.cantidad}</h2>
                <img src={`${prod.foto}`}></img>
            </div>)}

            <button className="btn btn-primary btn-block borrarCarrito" onClick={borrarCarrito}>Vaciar Carrito</button>

        </div>
    )
}

export default Cart
