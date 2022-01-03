import {createContext, useState, useContext} from 'react'

const CartContext = createContext([]) 
export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([])
    
    function agregarAlCarrito(item){
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1){
            const cantAntigua = cartList[index].cantidad
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, cantidad: item.cantidad + cantAntigua}])
        } else {
            setCartList([...cartList, item])
        }
        
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter(prods => prods.id !== id))
   }

   const totalPrice = () => {
    return cartList.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)    }

    function borrarCarrito(){
        setCartList([])
    }

    return (

        // Se crea acá para enmascarar
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            deleteItem,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
