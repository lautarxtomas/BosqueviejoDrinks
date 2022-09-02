import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../components/context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Cart = () => {
  
  const { cart, totalPrice } = useContext(cartContext)

  if (cart.length === 0){
    return (
      <div className="cart">
        <h2>No hay elementos en el carrito</h2>
        <img className="emptyCart" src="https://i.im.ge/2022/08/31/OEngQ6.107831.png" alt="" />
        <Link className="greenBtn" to='/'> IR A LA TIENDA </Link>
      </div>
    )
  }

  return (

    <div className="cart">
      {
        cart.map(product => <ItemCart key={product.id} product={product} /> )
      }
      <p className="totalPrice">
        Total: ${totalPrice()}
      </p>
      <Link className="greenBtn" to='/checkout'> CHECKOUT </Link>
      
    </div>
    
  )
}

export default Cart