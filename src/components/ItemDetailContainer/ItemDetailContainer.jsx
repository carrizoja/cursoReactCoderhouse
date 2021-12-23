import { useEffect, useState,  } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import "../ItemDetailContainer/ItemDetailContainer.css"
import {doc,collection, getDocs, getFirestore, getDoc} from 'firebase/firestore'


const ItemDetailContainer = () => {
    
    const {id} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (id) {
            const db = getFirestore();
            const queryDb = doc(db, 'items', id)
            getDoc(queryDb)
                .then(resp => setProductos({ id: resp.id, ...resp.data() }))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        } else {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            getDocs(itemsCollection)
                .then((snapshot) => {
                    setProductos(snapshot.docs.map((doc) => ({
                        id: doc.id, ...doc.data()
                    })))

                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))

        }

        
    }, [id])

    return (

        <div>

            {productos ? <ItemDetail item={productos} /> : 'cargando'}
        </div>
    );

};

export default ItemDetailContainer;