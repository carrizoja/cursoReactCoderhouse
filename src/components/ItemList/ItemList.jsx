import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.scss'

function ItemList({productos}) {
    return (
        <div className='row' style={{marginLeft:5, marginRight:5, marginTop:25}}>
        {  productos.map((prod) => <Item prod={prod} key={prod.id}/> )}
        </div>
    )
}

export default ItemList
