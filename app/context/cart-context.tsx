"use client"

import {createContext, useContext, useState} from "react"

export const CartContext = createContext<null | any>(null)

export default function CartContextProvider({children}: any) {
    const [cartModal, setCartModal] = useState<any>(false)
    const [cart, setCart] = useState(null)

return (
   <CartContext.Provider value={{cartModal, setCartModal, cart, setCart}}>
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