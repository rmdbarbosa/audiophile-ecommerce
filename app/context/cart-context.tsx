"use client"

import {createContext, useContext, useState, useEffect} from "react"


export const CartContext = createContext<null | any>(null)

export default function CartContextProvider({children}: any) {
    const [cartModal, setCartModal] = useState<any>(false)
    const [cart, setCart] = useState<any>([])

    const addToCart = (item: any) => {
        const { id, cartImg, quantity, name } = item;
        const cartItem = { id, cartImg, quantity, name };
        setCart((prevCart: any) => [...prevCart, cartItem]);
    }

    useEffect(() => {
console.log(cart)
    }, [cart] )

return (
   <CartContext.Provider value={{cartModal, setCartModal, cart, addToCart}}>
{children}
</CartContext.Provider> 
)}

export function useCartContext () {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error ("useCartContext must be used within a CartContextProvider")
    }
return context
}