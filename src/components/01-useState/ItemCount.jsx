import React, {useState} from 'react'

const ItemCount = (props) => {

const {max, inicial} = props

const[value, setValue] = useState(inicial)

const handleSuma = (valor) => {
    value < max ?
    setValue(prev => prev + valor) : alert('Se alcanzó el stock máximo')
}
const handleResta = (valor) => {
    value > inicial ? setValue(prev => prev - valor) : alert('Se alcanzó el mínimo de stock')
}

const handleRespuesta = () => {
    alert('Se agregaron '+ value +' productos')
}

    return (
        <div>
            <h2 style={{color: "black"}}>{value}</h2>
            <button className="btn btn-outline-primary btn-block" onClick={() => handleSuma(1)}>+</button>
            <button className="btn btn-outline-primary btn-block" onClick={() => handleResta(1)}>-</button>
            <button className="btn btn-outline-primary btn-block" onClick={() => handleRespuesta()}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
