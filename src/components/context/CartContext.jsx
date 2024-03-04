import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'

export const cartContext = createContext()

const CartContext = ({children}) => {

  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || []))

  const initialCart = JSON.parse(localStorage.getItem('cart')) || []; // Si getItem('cart') devuelve null, se asigna un array vacío como valor predeterminado

  const [cart, setCart] = useState(initialCart);
  

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== item.id)
    newCart.push({...item, quantity: newQuantity}) 
    setCart(newCart)
  }

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
  }

  const totalProducts = () => cart.reduce((acc, prod) => acc + prod.quantity, 0);

  const clearCart = () => {
    setCart([])
  }
    
  const removeProduct = (id) => {
    setCart(cart.filter(product => product.id !== id))
  }

  return (
    <cartContext.Provider value={{
      cart,
      setCart,
      clearCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts
    }}>
        {children}
    </cartContext.Provider>   
  )
}

export default CartContext