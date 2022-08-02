import './App.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PromoListContainer from './components/PromoList/PromoListContainer'
import PromoDetailContainer from './components/PromoDetail/PromoDetailContainer'
import Navbar from './common/Navbar'
import Footer from './common/Footer'



function App() {
  
  return (
    <div className="home">
    
    <BrowserRouter>

    <Navbar/>

      <Routes>

        <Route path = "/" element={<PromoListContainer/>}/>
        <Route path = "/category/:idCategoria" element={<PromoListContainer/>}/>
        <Route path = "/item/:id" element={<PromoDetailContainer/>}/>

      </Routes>

    <Footer/>
    
    </BrowserRouter>

    </div>
  );
}


export default App
