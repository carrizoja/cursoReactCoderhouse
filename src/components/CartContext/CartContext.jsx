import {createContext, useState, useContext} from 'react'

const CartContext = createContext([]) 
export const useCartContext = () => useContext(CartContext)


function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([])

     
    function addToShoppingCart(item){
        const index = cartList.findIndex(i => i.id === item.id)
        if (index > -1){
            const oldQuantity = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, {...item, quantity: item.quantity + oldQuantity}])
        } else {
            setCartList([...cartList, item])
        }
        
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter(prods => prods.id !== id))
   }

   const totalPrice = () => {
    return cartList.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)    }

    function deleteShoppingCart(){
        setCartList([])
    }



    return (

        // Se crea acá para enmascarar
        <CartContext.Provider value={{
            cartList,
            addToShoppingCart,
            deleteShoppingCart,
            deleteItem,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
