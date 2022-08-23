import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../components/context/CartContext'

const ItemCart = ({product}) => {

const { removeProduct } = useContext(cartContext)

  return (
    // CLASSNAME PROVISORIO
    <div className = "itemCart"> 
        <img src={product.imgSrc} alt="" />
        <p>{product.nombre}</p>
        <p>${product.precio}</p>
        <p>{product.desc}</p>
        <p>SUBTOTAL: ${product.quantity * product.precio}</p>
        <button className="detailBtn" onClick={() => removeProduct(product.id)}> Eliminar </button>
    </div>
  )
}

export default ItemCart