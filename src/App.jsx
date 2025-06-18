
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Home.jsx'
import Collectionpage from './pages/Collection.jsx'
import Cartpage from './pages/Cart.jsx'
import MainFooter from "./components/Footer"
import MainHeader from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <MainHeader />    
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collection" element={<Collectionpage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>     
      <MainFooter />
    </BrowserRouter>
  )
}

export default App;