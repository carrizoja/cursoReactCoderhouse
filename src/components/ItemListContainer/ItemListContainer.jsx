import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainer() {
    const [products, setProducts] = useState([])
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
                    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))

        } else {
            const db = getFirestore();
            const itemsCollection = collection(db, "items");
            getDocs(itemsCollection)
                .then((snapshot) => {
                    setProducts(snapshot.docs.map((doc) => ({
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
                (<React.Fragment>
                    
                    <ItemList products={products} />
                </React.Fragment>   
                    
                )
                

            }

        </>
    )
}

export default ItemListContainer
