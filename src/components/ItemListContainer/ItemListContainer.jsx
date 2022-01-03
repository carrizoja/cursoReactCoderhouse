import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'


function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // Destructuring
    const {idCate} = useParams()   

    // Use Effect para no bloquear los renderizados y mejorar la User Exp 
    useEffect(() => {

        if (idCate) {
            const db = getFirestore();
            const q = query(collection(db, "items"), where("category", "==", idCate));
            getDocs(q)
                .then((snapshot) => {
                    setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                })
                .catch(error => console.log(error))
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

    }, [idCate]) 

   
    
    return (
        <>

            {loading ?

                (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )


                :
                <ItemList productos={productos} />

            }

        </>
    )
}

export default ItemListContainer
