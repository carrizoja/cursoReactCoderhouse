import {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/GetFetch';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";



function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // Destructuring
    const {idCate} = useParams()   

    // Use Effect para no bloquear los renderizados y mejorar la User Exp 
    useEffect(() => {

       if (idCate) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else {
            getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        }

        
        
    }, [idCate])
    
    console.log(idCate)
    
    return (
        <>
            {greeting}

            {loading ?
                <h2>cargando...</h2>
                :
                <ItemList productos={productos} />
            }

        </>
    )
}

export default ItemListContainer
