"use client";

import { createContext, useContext, useState } from "react";
import { ProductToCart } from "../components/products/AddRemoveInputButton";

export const CartContext = createContext<null | any>(null);

export default function CartContextProvider({ children }: any) {
  const [cartModal, setCartModal] = useState<any>(false);
  const [cart, setCart] = useState<ProductToCart[]>([]);
  const [orderModal, setOrderModal] = useState(false)
  const [grandTotal, setGrandTotal] = useState(0)

  const addToCart = (item: ProductToCart) => {
    const { id, cartImg, quantity, name, price } = item;

    // Check if the item with the same id already exists in the cart
    const existingCartItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === id
    );

    if (existingCartItemIndex !== -1) {
      // If the item already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it as a new item
      const cartItem = { id, cartImg, quantity, name, price };
      setCart((prevCart) => [...prevCart, cartItem]);
    }
  };

  // Function to increase the quantity of an item in the cart by 1
  const increaseItemQuantity = (itemId: number) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  // Function to decrease the quantity of an item in the cart by 1 or remove it if quantity becomes 0
  const decreaseItemQuantity = (itemId: number) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      if (updatedCart[itemIndex].quantity > 1) {
        updatedCart[itemIndex].quantity -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  const removeAll = () => {
    setCart([]);
  };

  // Function to get the total cart amount
  const getTotalCartAmount = (): number => {
    // Use the reduce function to sum up the prices of all items in the cart
    const totalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Return the total cart amount
    return totalAmount;
  };

  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        cart,
        addToCart,
        removeAll,
        getTotalCartAmount,
        increaseItemQuantity,
        decreaseItemQuantity,
        setOrderModal,
        orderModal,
        grandTotal,
        setGrandTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
