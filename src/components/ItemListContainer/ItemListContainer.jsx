import {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/GetFetch';
import ItemList from '../ItemList/ItemList';




function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // Use Effect para no bloquear los renderizados y mejorar la User Exp 
    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        
    }, [])
    

    return (
        <>
            {greeting}
            
            {loading ?
                <h2>cargando...</h2>
                :
              <ItemList productos={productos}/>
            }
           
        </>
    )
}

export default ItemListContainer
