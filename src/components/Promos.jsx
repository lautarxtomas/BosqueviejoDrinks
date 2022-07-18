import React from 'react'
import PromoCard from './PromoCard'

import ipa from '../img/andesipa.png'
import fernet from '../img/fernet.png'
import campari from '../img/campari.png'
import schneider from '../img/schneider.png'


const Promos = () => {
  return (
    <div className="promos">
        
        <PromoCard nombre="Six Pack ANDES IPA" precio="$750" descripcion="ALC 7% IBU 20%" imgSrc={ipa} />
        <PromoCard nombre="Fernet BRANCA" precio="$890" descripcion="ALC 40%" imgSrc={fernet} />
        <PromoCard nombre="SCHNEIDER 1L" precio="2x $500" descripcion="ALC 5%" imgSrc={schneider}  />
        <PromoCard nombre="CAMPARI" precio="$750" descripcion="ALC 35%" imgSrc={campari} />
    </div>
    
  )
}

export default Promos