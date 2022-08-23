import React from 'react'
import { Icon } from '@iconify/react';
import { useContext } from 'react'
import { cartContext } from '../components/context/CartContext'

const CartWidget = () => {

  const { totalProducts, cart } = useContext(cartContext)

  return (
    
    <div className="cartWidget">
    <Icon icon="emojione-monotone:shopping-cart" className="cartWidget" />
    <span className="totalProducts"> { cart.length != 0 ? totalProducts () : '' } </span>
    </div> 

  )
}

export default CartWidget