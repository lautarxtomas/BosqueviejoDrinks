import React from 'react'
import PromoList from './PromoList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const PromoListContainer = () => {

const [drinks, setDrinks] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)
const { idCategory } = useParams()


useEffect(() => {
  const db = getFirestore()
  const queryCollection = collection(db, 'products')
  
  setTimeout(() => {
    if (idCategory) {
      const queryFilter = query(queryCollection, where('idCategory', '==', idCategory))
      getDocs(queryFilter)
      .then(res => setDrinks(res.docs.map(product => ({ id: product.id, ...product.data() }) )))
      .catch((e) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
    } else {
      getDocs(queryCollection)
      .then(res => setDrinks(res.docs.map(product => ({ id: product.id, ...product.data() }) )))
      .catch((e) => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
    }
  }, 500)
  
}, [idCategory])


  return (
    <div className="promoListContainer">

      {error && console.log("Algo salió mal")}

     <PromoList products={drinks} loading={loading} />
    </div>
  )
}

export default PromoListContainer
