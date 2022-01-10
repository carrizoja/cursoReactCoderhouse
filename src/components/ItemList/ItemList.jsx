import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.scss'

function ItemList({products}) {
    return (
        <div className='row itemList'>
        {  products.map((prod) => <Item prod={prod} key={prod.id}/> )}
        </div>
    )
}

export default ItemList