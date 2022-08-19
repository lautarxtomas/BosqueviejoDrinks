import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { cartContext } from './context/CartContext'
import { addDoc, collection, getFirestore, updateDoc } from 'firebase/firestore'


const Checkout = () => {

    const { cart, setCart, totalPrice } = useContext(cartContext)

    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [email, setEmail] = useState('')
    const [idOrder, setIdOrder] = useState('')

    const terminarCompra = () => {
        const order = 
        { 
            buyer: {name, tel, email}, 
            items: cart.map(product => ({id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.quantity})),
            total: totalPrice()
        }

        console.log(order)

        const db = getFirestore()
        const refCollection = collection(db, 'pedidos')

        addDoc(refCollection, order).then((res) => {
            setIdOrder(res.id)
            setCart([])
        })
    }

  return (
    <div style={{backgroundColor: '#ff000'}}>
        <input type = {'text'} placeholder = "Ingresá tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <input type = {'tel'} placeholder = "Ingresá tu celular" value={tel} onChange={(e) => setTel(e.target.value)}/>
        <br />        
        <input type = {'email'}placeholder = "Ingresá tu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <button onClick={terminarCompra}> FINALIZAR LA COMPRA </button>

        
        <p> TU CODIGO DE SEGUIMIENTO ES: {idOrder} </p>
    </div>
  )
}

export default Checkout