import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../components/context/CartContext'

const ItemCart = ({product}) => {

const { removeProduct } = useContext(cartContext)

  return (
    <div className = "itemCart"> 
        <img src={product.imgSrc} alt="" />
        <p>{product.name}</p>
        <p>${product.price}</p>
        <p>{product.desc}</p>
        <p>SUBTOTAL: ${product.quantity * product.price}</p>
        <button className="detailBtn" onClick={() => removeProduct(product.id)}> Eliminar </button>
    </div>
  )
}

export default ItemCart