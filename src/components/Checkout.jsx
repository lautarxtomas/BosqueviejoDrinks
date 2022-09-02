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
    const [finished, setFinished] = useState(false)

    const terminarCompra = () => {
        const order = 
        { 
            buyer: {name, tel, email}, 
            items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
            total: totalPrice()
        }

        console.log(order)

        const db = getFirestore()
        const refCollection = collection(db, 'orders')

        addDoc(refCollection, order).then((res) => {
            setIdOrder(res.id)
            setFinished(true)
            setCart([])
        })
    }

  return (

    <>
    { 
        !finished 
        ? 
        <div className="formCheckout">
                
            <input className="formInput" type = {'text'} placeholder = "Ingresá tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
            
            <input className="formInput" type = {'tel'} placeholder = "Ingresá tu celular" value={tel} onChange={(e) => setTel(e.target.value)}/>
                
            <input className="formInput" type = {'email'} placeholder = "Ingresá tu e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
            
            <button className="formBtn" onClick={terminarCompra}> FINALIZAR LA COMPRA </button>
            
        </div>

        :
        <div className="finished">
            <p className="thx">¡MUCHAS GRACIAS POR TU COMPRA!</p>
            <img src="https://i.im.ge/2022/08/24/O0mxk6.finished.png" alt="" /> 
            <p className="code"> TU CODIGO DE SEGUIMIENTO ES: {idOrder} </p> 
        </div>

    }

     </>
  )
}

export default Checkout

