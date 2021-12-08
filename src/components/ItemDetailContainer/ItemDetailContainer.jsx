import { useEffect, useState,  } from "react";
import getOneProduct from "../../helpers/getOneProduct";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    console.log("item", item);

    useEffect(()=>{
        getOneProduct.then((res)=> setItem(res)).catch((err)=> console.log(err));
    });

    return (
        <div>
            <h1>Item detail container</h1>
            <ItemDetail item={item} />
        </div>
    );

};

export default ItemDetailContainer;