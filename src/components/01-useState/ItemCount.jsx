import React, {useState} from 'react'
import '../01-useState/ItemCount.css'

const ItemCount = ({stock, onAdd}) => {

const[value, setValue] = useState(1)

const add = () => {
    value !== stock && setValue(value + 1);

}

const substract = () =>{
    value !== 0 && setValue(value - 1);
}


    return (
        <div className='itemCount'>
            <h2 style={{color: "black"}}>{value}</h2>
            <button className="btn btn-primary btn-block mas" onClick={add} disabled={value === stock}>+</button>
            <button className="btn btn-primary btn-block menos" onClick={substract}>-</button>
            <button disabled={value === 0} className="btn btn-primary btn-block agregarCarrito" onClick={() => onAdd(value)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
