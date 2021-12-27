import {useCartContext } from '../../CartContext/CartContext'
import ItemCount from "../01-useState/ItemCount";
import { Link } from "react-router-dom";
import React, { useEffect} from "react";
import Table from '../../Table/Table.jsx'

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
           {/*  {cartList.map(prod => <div key={prod.id} className="card w-100 mt-4">
                <h2 style={{color: "black"}}>{prod.name}</h2>              
                <img src={`${prod.imageID}`} alt='' className='w-50'></img>
                <h2 style={{color: "black"}}>Cantidad: {prod.cantidad}</h2>
                <h2 style={{color: "black"}}>Subtotal: {prod.cantidad * prod.quantity}</h2>
                <ItemCount></ItemCount>
            </div>)} */}

            {/* <button className="btn btn-primary btn-block borrarCarrito" onClick={borrarCarrito}>Vaciar Carrito</button>  */}                
        </div>
        }
        </div>
    );
}

export default Cart
