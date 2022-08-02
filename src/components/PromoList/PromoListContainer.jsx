import React from 'react'
import PromoList from './PromoList'
// import data from "../products/drinks.json"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PromoListContainer = () => {

const [drinks, setDrinks] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)
const { idCategoria } = useParams()

useEffect(() => {

  let productos = [
    {
      id: 1,
      nombre: "Six Pack ANDES IPA",
      precio: 750,
      desc: "ALC 7% IBU 20%",
      imgSrc: "https://i.im.ge/2022/07/26/FLG1Y0.png",
      idCategoria: "cervezas",
      initial: 1,
      stock: 12
    },
  
    {
        id: 2,
        nombre: "Fernet BRANCA",
        precio: 1000,
        desc: "ALC 40%",
        imgSrc: "https://i.im.ge/2022/07/26/FLGOUW.png",
        idCategoria: "fernet",
        initial: 1,
        stock: 15
    },
  
    {
        id: 3,
        nombre: "Schneider 1L",
        precio: 300,
        desc: "ALC 5%",
        imgSrc: "https://i.im.ge/2022/07/26/FLGXO1.png",
        idCategoria: "cervezas",
        initial: 1,
        stock: 8
    },
  
    {
        id: 4,
        nombre: "Campari",
        precio: 750,
        desc: "ALC 35%",
        imgSrc: "https://i.im.ge/2022/07/26/FLGrWm.png",
        idCategoria: "aperitivos",
        initial: 1,
        stock: 6
    },

    {
      id: 5,
      nombre: "Jagermeister",
      precio: 3300,
      desc: "ALC 40%",
      imgSrc: "https://i.im.ge/2022/08/02/FyqMlD.jager.png",
      idCategoria: "licores",
      initial: 1,
      stock: 5
    },

    {
      id: 6,
      nombre: "Beefeater",
      precio: 2800,
      desc: "ALC 40%",
      imgSrc: "https://i.im.ge/2022/08/02/Fyqoeq.beefeater.png",
      idCategoria: "aperitivos",
      initial: 1,
      stock: 4
    },

    {
      id: 7,
      nombre: "1882",
      precio: 600,
      desc: "ALC 40%",
      imgSrc: "https://i.im.ge/2022/08/02/FyqTcC.1882.png",
      idCategoria: "fernet",
      initial: 1,
      stock: 10
    },
    
    {
      id: 8,
      nombre: "Johnnie Walker Red Label",
      precio: 4000,
      desc: "ALC 40%",
      imgSrc: "https://i.im.ge/2022/08/02/Fyql7p.redlabel.png",
      idCategoria: "whisky",
      initial: 1,
      stock: 5
    },

    {
      id: 9,
      nombre: "Smirnoff Classic",
      precio: 1000,
      desc: "ALC 40%",
      imgSrc: "https://i.im.ge/2022/08/02/FyqQi4.smirnoff.png",
      idCategoria: "vodka",
      initial: 1,
      stock: 12
    },
  ]
  
  const productPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(!idCategoria) {
            resolve(productos) // resolve(data) si quisiera devolver el json
          } else{
            resolve(productos.filter(producto => producto.idCategoria === idCategoria))
          }
        }, 500)
    })
  } 

  productPromise()
  .then((response) => {
    setDrinks(response)
  })
  .catch((e) => {
    setError(true)
  })
  .finally(() => {
    setLoading(false)
  })
}, [idCategoria])


  return (
    <div className="promoListContainer">

      {/* SI ERROR ESTA EN TRUE (SETEADO EN EL CATCH) TIRA MSJ DE ERROR EN CLG */}
      {error && console.log("Algo salió mal")}

     <PromoList products={drinks} loading={loading} />
    </div>
  )
}

export default PromoListContainer
