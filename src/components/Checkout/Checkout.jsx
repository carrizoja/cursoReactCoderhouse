import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {useCartContext } from '../CartContext/CartContext.jsx'

import "./Checkout.scss";

const Checkout = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { cartList} = useCartContext();

    useEffect(() => {
        if (cartList.length > 0) {
            setTotalPrice(
                cartList
                    .map((product) => product.price * product.quantity)
                    .reduce((total, valor) => total + valor)
            );
        }
    }, [cartList]);

    return (
        <div className="checkout container">
            <div className="card text-center">
                <div className="card-header" style={{color:"black"}}>Resumen</div>
                <div className="card-body">
                    <h5 className="card-title" style={{color:"black", fontSize: 25}}>Total: ${totalPrice}</h5>
                    <p className="card-text" style={{color:"black"}}>Para continuar, haz clic en el botón.</p>
                    <Link to="/form" className="btn btn-success">
                        Generar Orden
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;