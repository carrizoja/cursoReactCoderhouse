import ItemCount from "../01-useState/ItemCount";
import { Link } from "react-router-dom";
import { useState} from "react";
import '../ItemDetail/ItemDetail.css'
import {useCartContext } from '../CartContext/CartContext.jsx'
import React from 'react'

const ItemDetail = ({item})=>{

const [goCart, setGoCart] = useState(false);

const {addToShoppingCart} = useCartContext()

const onAdd = (quantity) =>{
    setGoCart(true);
    addToShoppingCart({...item,quantity:quantity})
}

    return(
        <div className="flex bg-light itemDetailContainer">
            <h3>{item.name}</h3>
            <h3>${item.price}.-</h3>
            <p>{item.category}</p>
            <img className="imageItemDetail" src={`${item.imageID}`} alt={`${item.imageID}`}></img>
            <p>{item.description}</p>
            <div>
            {!goCart ? (
                <ItemCount stock={item.stock} onAdd={onAdd} />
            ):(<React.Fragment>
                 <Link to="/cart"><button className="btn btn-success btn-block irAlCarrito">Ir al Carrito</button></Link>
                <Link to="/"><button className="btn btn-primary seguirComprando">Seguir Comprando</button></Link>
            </React.Fragment>            
            )}
            
            </div>
        </div>           
    );
};

export default ItemDetail;