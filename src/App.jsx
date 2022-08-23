import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PromoListContainer from './components/PromoList/PromoListContainer'
import PromoDetailContainer from './components/PromoDetail/PromoDetailContainer'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import Cart from './common/Cart'
import TestEventos from './components/TestEventos'
import CartContext from './components/context/CartContext'
import Checkout from './components/Checkout'

function App() {
  
  return (
    <div className="home">
    
    
    <CartContext>

      <BrowserRouter>
      
        <Navbar/>

        <Routes>

          <Route path = "/" element={<PromoListContainer/>}/>
          <Route path = "/category/:idCategoria" element={<PromoListContainer/>}/>
          <Route path = "/item/:idDetail" element={<PromoDetailContainer/>}/>
          <Route path = "/cart" element={<Cart/>}/>
          <Route path = "/checkout" element={<Checkout/>}/>

        </Routes>

        <Footer/>

      </BrowserRouter>

    </CartContext>

    </div>
  );
}


export default App
