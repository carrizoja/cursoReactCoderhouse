import React from 'react'
import {useCartContext } from '../CartContext/CartContext.jsx'
import '../Table/Table.scss'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const Table = () => {
    const { cartList, deleteShoppingCart, deleteItem, totalPrice } = useCartContext()

    return (
        <div className='tableContainer'>
            <div className="table-data">
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
                                <th><img src={`${item.imageID}`} alt='' className='w-50 tableImage'></img></th>
                                <th scope="row">{item.quantity}</th>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>${item.quantity * item.price}</td>
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
                <button className="btn btn-danger btn-block deleteShoppingCart" onClick={deleteShoppingCart}>Vaciar Carrito</button>
            </div>
        </div>

    )
}

export default Table
