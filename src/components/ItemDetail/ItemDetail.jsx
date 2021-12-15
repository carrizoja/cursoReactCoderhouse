import ItemCount from "../01-useState/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({item})=>{

const [goCart, setGoCart] = useState(false);
const onAdd = (cantidad) =>{
    
    console.log(cantidad);
    setGoCart(true);
}

    return(
        <div className="flex bg-light">
            <h3 style={{color: "black"}}>Detalle del item</h3>
            <h3 style={{color: "black"}}>{item.name}</h3>
            <h3 style={{color: "black"}}>${item.price}</h3>
            <p style={{color: "black"}}>{item.categoria}</p>
            <img src={`${item.foto}`} alt={`${item.foto}`}></img>
            <p style={{color: "black"}}>{item.descripcion}</p>
            <div>
            {!goCart ? (
                <ItemCount stock={item.stock} onAdd={onAdd} />
            ):(
                <Link to="/cart"><button className="btn btn-success btn-block irAlCarrito">Ir al Carrito</button></Link>
                
            )}
            
            </div>
        </div>           
    );
};

export default ItemDetail;