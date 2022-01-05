import React from 'react'
import {useCartContext } from '../CartContext/CartContext.jsx'
import '../Table/Table.scss'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const Table = () => {
    const { cartList, borrarCarrito, deleteItem, totalPrice } = useCartContext()

    console.log(totalPrice);
    return (
        <div className='tableContenedor'>
            <div className="table-data" style={{backgroundColor: "white"}}>
                <div className="table-data__title">
                    <h1>Carrito</h1>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Artículo</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.map((item, index) => (
                            <tr key={index}>
                                <th><img src={`${item.imageID}`} alt='' className='w-50'></img></th>
                                <th scope="row">{item.cantidad}</th>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>${item.cantidad * item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteItem(item.id)}
                                    ><DeleteRoundedIcon />
                                        
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>                
                </table>
                <h1 style={{color: "black"}}>Total: ${totalPrice()}</h1>
                <button className="btn btn-danger btn-block borrarCarrito" onClick={borrarCarrito}>Vaciar Carrito</button>
            </div>
        </div>

    )
}

export default Table
