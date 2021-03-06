import {useCartContext } from '../CartContext/CartContext.jsx'
import { Link } from "react-router-dom";
import React from "react";
import Table from '../Table/Table.jsx'
import '../Cart/Cart.scss'
import Checkout from '../Checkout/Checkout.jsx';

function Cart() {


    const { cartList} = useCartContext()


    const messageConditional = (
        <div className="card text-center cart-message">
            <div className="card-header" style={{color: "black"}}>Ops!</div>
            <div className="card-body">
                <h5 className="card-title" style={{color: "black"}}>¡Tu carrito está vacío!</h5>
                <p className="card-text" style={{color: "black"}}>
                    ¿No sabés qué comprar? ¡Miles de productos tecnológicos te esperan!
                </p>
                <Link to="/" className="btn btn-primary">
                    Ir a comprar
                </Link>
            </div>
            <div className="card-footer text-muted">iJac Store</div>
        </div>
    );


    return (
        <div className='cart'>

        
        {cartList.length === 0 ? 
            messageConditional :
        <div> 
            <Table></Table> 
            <Checkout />         
                         
        </div>
        }
        </div>
    );
}

export default Cart
