import React from 'react'
import ItemCount from '../ItemCount'
// import DetailCard from './DetailCard'

const PromoDetail = ({product, loading}) => {

  return (

    <div className="promoDetail">

      
    {/* MIENTRAS LOADING SE MANTENGA EN TRUE, VA A APARECER EL SPINNER */} 
      {loading && 
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      }

      {loading || // SI NO PONGO ESTO, DURANTE EL LOADING SE PRERENDERIZA LA CARD SIN LOS VALORES CARGADOS, QUEDANDO FEO A LA VISTA (Y TAMPOCO ANDA EL ITEMCOUNT SIN ESTO).
        <div className="promoDetailCard">
            <img src={product.imgSrc} alt="" />
            <h4>{product.nombre}</h4>
            <p>${product.precio}</p>
            <p>{product.desc}</p>
            <p>{product.descDetail}</p>
            <ItemCount initial = {product.initial} stock = {product.stock} nombreProducto = {product.nombre} />
        </div> 

        /* {loading || 
          <DetailCard nombre={product.nombre} precio={product.precio} desc={product.desc} imgSrc={product.imgSrc} initial={product.initial} stock={product.stock} descDetail={product.descDetail}/>
        }  */

      }
    </div>
    
  )
}

export default PromoDetail