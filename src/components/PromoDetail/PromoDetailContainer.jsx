import React from 'react'
import PromoDetail from './PromoDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const PromoDetailContainer = () => {

const [drink, setDrink] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)
const { idDetail } = useParams()


useEffect(() => {
  const db = getFirestore()
  const queryDoc = doc(db, 'products', idDetail)
  getDoc(queryDoc)
  .then( res => setDrink( {id: res.id, ...res.data()} ) )
  .catch((e) => {
    setError(true)
  })
  .finally(() => {
    setLoading(false)
  })

}, [idDetail])

  return (
    <div className="promoListContainer">

      {error && console.log("Algo salió mal")}

     <PromoDetail product={drink} loading={loading} />
    </div>
  )
}


export default PromoDetailContainer
