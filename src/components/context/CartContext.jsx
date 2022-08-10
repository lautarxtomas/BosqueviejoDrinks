import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

// export const useCartContext = () => useContext(cartContext)

export const cartContext = createContext()

const CartContext = ({children}) => {

  const [cart, setCart] = useState([])

  const addProduct = (item, newQuantity) => {
    const newCart = cart.filter(prod => prod.id !== item.id)  // LE ASIGNAMOS A NEWCART TODOS LOS ITEMS DEL CART MENOS EL QUE ELEGI
    newCart.push({...item, quantity: newQuantity}) // Y LUEGO LO VUELVE A METER AL CARRITO, AGREGANDO LA PROPIEDAD QUANTITY AL ARRAY, Y SOBREESCRIBIENDO ESA CANTIDAD POR LA CANTIDAD NUEVA QUE ELIJA EL USER. SOLO EL CART VA A TENER LA PROPIEDAD QUANTITY.
    setCart(newCart)
  }

  console.log('carrito:', cart)

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);
  }

  const totalProducts = () => cart.reduce((acc, prod) => acc + prod.quantity, 0);

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
      addProduct,
      totalPrice,
      totalProducts
    }}>
        {children}
    </cartContext.Provider>   
  )
}

export default CartContext