import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../components/context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'

const Cart = () => {
  
  const { cart, totalPrice } = useContext(cartContext)

  if (cart.length === 0){
    return (
      <div className="promoList">
        <p>No hay elementos en el carrito</p>
        <Link to='/'> IR A LA TIENDA </Link>
      </div>
    )
  }

  return (
    // TIENE LA MISMA CLASSNAME QUE PROMOLIST SOLO PARA QUE EL CART SE VEA IGUAL QUE EL INDEX
    <div className="promoList">
      {
        cart.map(product => <ItemCart key={product.id} product={product} /> )
      }
      <p className="totalPrice">
        Total: ${totalPrice()}
      </p>
      <button> <Link to='/checkout'> CHECKOUT </Link> </button>
      
    </div>
  )
}

export default Cart