import React from 'react'
import PromoDetail from './PromoDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PromoDetailContainer = () => {

const [drink, setDrink] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)
const { id } = useParams()

useEffect(() => {

  let productos = [
    {
      id: 1,
      nombre: "Six Pack ANDES IPA",
      precio: 750,
      desc: "ALC 7% IBU 20%",
      descDetail: "La Andes Origen IPA Andina es un gustito de amargo intenso con un leve dulzor para equilibrar, notas a cereal, levadura y un toque ácido al final. Esta cerveza de dorado brillante y sabor intenso tiene aromas herbales con ésteres y apenas levadura.",
      imgSrc: "https://i.im.ge/2022/07/26/FLG1Y0.png",
      initial: 1,
      stock: 12
    },
  
    {
        id: 2,
        nombre: "Fernet BRANCA",
        precio: 1000,
        desc: "ALC 40%",
        descDetail: "El fernet es una bebida alcohólica de la familia de los amaros italianos elaborada a partir de la maceración de varios tipos de hierbas ​ en alcohol obtenido de la fermentación de la vid. Dependiendo del productor, la maceración es posteriormente filtrada y reposada en toneles de roble durante un período variable.",
        imgSrc: "https://i.im.ge/2022/07/26/FLGOUW.png",
        initial: 1,
        stock: 13
    },
  
    {
        id: 3,
        nombre: "Schneider 1L",
        precio: 300,
        desc: "ALC 5%",
        descDetail: "Cerveza rubia clásica, recomendado tomarla a -15°. ",
        imgSrc: "https://i.im.ge/2022/07/26/FLGXO1.png",
        initial: 1,
        stock: 8
    },
  
    {
        id: 4,
        nombre: "Campari",
        precio: 750,
        desc: "ALC 35%",
        descDetail: "Campari es una bebida alcohólica de grado medio, tonificante y refrescante, calificable como aperitivo, de característico color rojo y sabor amargo. Se acompaña con un jugo frutal, preferentemente cítrico.",
        imgSrc: "https://i.im.ge/2022/07/26/FLGrWm.png",
        initial: 1,
        stock: 6
    },

    {
      id: 5,
      nombre: "Jagermeister",
      precio: 3300,
      desc: "ALC 40%",
      descDetail: "El Jägermeister, un licor a base de hierbas que cada vez se toma más en la provincia. Muchos ven a este licor de hierbas como un sucesor del fernet, e incluso temen que esta bebida pueda reemplazar con su amargo sabor al clásico Branca, la bebida alcohólica más tomada en Argentina después de la cerveza y el vino.",
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
      descDetail: "Esta ginebra, una London Dry Gin por antonomasia hecha con un intenso toque de enebro y fuertes notas cítricas, es una auténtica London Dry para quienes disfrutan del sabor auténtico de la ginebra.",
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
      descDetail: "El fernet es una bebida alcohólica de la familia de los amaros italianos elaborada a partir de la maceración de varios tipos de hierbas ​ en alcohol obtenido de la fermentación de la vid. Dependiendo del productor, la maceración es posteriormente filtrada y reposada en toneles de roble durante un período variable.",
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
      descDetail: "Versátil y con un atractivo universal, tiene un sabor acentuado y lleno de carácter que se mantiene incluso al ser mezclado. Johnnie Walker Red label es ahora el whisky escocés más vendido en todo el mundo. Perfecto para fiestas y encuentros, en casa o al salir de ella. Puede consumirlo solo o mezclarlo con Coca Cola o RedBull. Disfrútelo con sus amigos.",
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
      descDetail: "El vodka Smirnoff No. 21 es el vodka No. 1 del mundo. Nuestro galardonado vodka tiene un sabor robusto con un acabado seco para una máxima suavidad y claridad. Triplemente destilado y filtrado 10 veces, nuestro vodka es perfecto con hielo o en su cóctel favorito. Smirnoff No. 21 tiene certificación Kosher, no contiene gluten y está hecho con maíz no modificado genéticamente. *Ganador de la doble medalla de oro en el Concurso Mundial de Bebidas Espirituosas de San Francisco 2017",
      imgSrc: "https://i.im.ge/2022/08/02/FyqQi4.smirnoff.png",
      idCategoria: "vodka",
      initial: 1,
      stock: 12
    },
  ]
  
  const productPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let specificProduct = productos.find(product => product.id == id)
            resolve(specificProduct)
        }, 2000)
    })
  } 

  productPromise()
  .then((response) => {
    setDrink(response)
  })
  .catch((e) => {
    setError(true)
  })
  .finally(() => {
    setLoading(false)
  })
}, [id])


  return (
    <div className="promoListContainer">

      {/* SI ERROR ESTA EN TRUE (SETEADO EN EL CATCH) TIRA MSJ DE ERROR EN CLG */}
      {error && console.log("Algo salió mal")}

     <PromoDetail product={drink} loading={loading} />
    </div>
  )
}


export default PromoDetailContainer
