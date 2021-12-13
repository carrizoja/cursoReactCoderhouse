import React from 'react'
import ItemCount from '../01-useState/ItemCount'
import {Link} from 'react-router-dom'  

function Item({ prod }) {
    const inicial = 1
    const max = 10
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}
            // La Key identifica a cada componente y cada retorno
            key={prod.id}
            className='col-md-4 col-sm-6'
        >
            <div style={{flex:1}} className="card w-100 mt-4" >
                <div className="card-header" >
                    <h2 style={{ color: "black" }}>{`${prod.name} - ${prod.categoria}`}</h2>
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50' />
                    <h2 style={{ color: "black" }}>$ {prod.price}</h2>
                </div>
                <div className="card-footer">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>
                    </Link>
                </div>
                <ItemCount inicial={inicial} max={max} />
            </div>
            
        </div>
    )
}

export default Item
