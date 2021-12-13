import ItemCount from "../01-useState/ItemCount";
const inicial = 1
const max = 10
const ItemDetail = ({item})=>{
    console.log("El item", item);
    return(
        <div className="flex bg-light">
            <h3 style={{color: "black"}}>Detalle del item</h3>
            <h3 style={{color: "black"}}>{item.name}</h3>
            <h3 style={{color: "black"}}>${item.price}</h3>
            <p style={{color: "black"}}>{item.categoria}</p>
            <img src={`${item.foto}`} alt={`${item.foto}`}></img>
            <div>
            <ItemCount inicial={inicial} max={max} />
            </div>
        </div>           
    );
};

export default ItemDetail;