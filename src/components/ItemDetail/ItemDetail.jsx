const ItemDetail = ({item})=>{
    console.log("El item", item);
    return(
        <div className="flex bg-danger">
            <h3>Detalle del item</h3>
            <h3>{item.name}</h3>
            <h3>${item.price}</h3>
            <p>{item.categoria}</p>
            <img src={`${item.foto}`} alt={`${item.foto}`}></img>
        </div>
    );
};

export default ItemDetail;