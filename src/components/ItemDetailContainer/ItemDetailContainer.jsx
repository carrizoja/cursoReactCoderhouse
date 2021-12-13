import { useEffect, useState,  } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import { getFetch } from '../../helpers/GetFetch';


const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 
    const [item, setItem] = useState({});
    console.log("item", item);
    // hacer useEffect como en item listContainer
    useEffect(() => {

        if (id) {
            getFetch
                .then(resp => setItem(resp.filter(prod => prod.id ===  parseInt(id) )))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch
                .then(resp => setProductos(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }


        
    }, [id])

    console.log(id)

  /*   useEffect(()=>{
        getOneProduct.then((res)=> setItem(res)).catch((err)=> console.log(err));
    }); */

    return (
        <div>
            <h1>Item detail container</h1>
            <ItemDetail item={item} />
        </div>
    );

};

export default ItemDetailContainer;