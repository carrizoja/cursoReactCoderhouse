import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'



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

   /*  useEffect(() => {

        const db = getFirestore();
        const queryDb = doc(db, 'items', '27yJXhLuLy20tFJDXjLE')
        getDocs(queryDb)
            .then(resp => setProducto({ id: resp.id, ...resp.data() }))


    }, [idCate])
  */
  /*   useEffect(() => {

        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection)
            .then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()
                })))

            })
            .finally(() => setLoading(false))

    }, []) */

    /*  useEffect(() => {

        const db = getFirestore();
        const q = query(collection(db, "items"), where("category", "==", idCate));
        getDocs(q)
            .then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ... doc.data() })));
            })
            .catch(error => console.log(error))
    }, []); 
   */

      /*  const queryCollection = collection(db,'items')
        getDocs(queryCollection)
        .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()})))) */
        /* getDocs(queryDb)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()})))) */
    console.log(idCate)
    
    return (/*  */
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
