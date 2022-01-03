import React from 'react'
import {Link} from 'react-router-dom'  
import '../Item/Item.scss'

function Item({ prod }) {
    
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}
            // La Key identifica a cada componente y cada retorno
            key={prod.id}
            className='col-md-4 col-sm-6'
        >
            <div style={{ flex: 1 }} className="card w-100 mt-4 item" >
                <div className="card-header" >
                    <h2 style={{ color: "black" }}>{`${prod.name} - ${prod.category}`}</h2>
                </div>
                <div className="card-body">
                    <img src={prod.imageID} alt='' className='w-50' style={{height:150, width:150}} />
                    <h2 style={{ color: "black" }}>$ {prod.price}</h2>
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
