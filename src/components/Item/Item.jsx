import React from 'react'
import {Link} from 'react-router-dom'  
import '../Item/Item.scss'

function Item({ prod }) {
    
    return (
        <div  
            // La Key identifica a cada componente y cada retorno
            key={prod.id}
            className='col-md-4 col-sm-6 itemStyle'
        >
            <div className="card w-100 mt-4 item" >
                <div className="card-header" >
                    <h2>{`${prod.name} - ${prod.category}`}</h2>
                </div>
                <div className="card-body">
                    <img src={prod.imageID} alt='itemImage' className='w-50 itemImage'/>
                    <h2>$ {prod.price}</h2>
                </div>
                <div className="card-footer">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-primary btn-block">
                            detalle del producto
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Item
