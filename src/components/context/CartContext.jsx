import React from 'react'
import { createContext } from 'react'
import { useState, useEffect, useContext } from 'react'

// export const useCartContext = () => useContext(cartContext)

export const cartContext = createContext()

const CartContext = ({children}) => {

  const [cart, setCart] = useState([])

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== item.id)  // LE ASIGNAMOS A NEWCART TODOS LOS ITEMS DEL CART MENOS EL QUE ELEGI
    newCart.push({...item, quantity: newQuantity}) // Y LUEGO LO VUELVE A METER AL CARRITO PERO SOBREESCRIBIENDO LA CANTIDAD ANTERIOR
    setCart(newCart)
  }

  console.log('carrito:', cart)

  const clearCart = () => setCart([])

  // const isInCart = (id) => cart.find(product => product.id === id) ? true : false

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

  return (
    <cartContext.Provider value={{
      cart,
      setCart,
      clearCart,
      // isInCart,
      removeProduct,
      addProduct
    }}>
        {children}
    </cartContext.Provider>   
  )
}

export default CartContext