import {BrowserRouter, Routes, Route, useLocation,} from "react-router-dom";
import Homepage from "./pages/Home.jsx";
import Collectionpage from "./pages/Collection.jsx";
import Cartpage from "./pages/Cart.jsx";
import ProductDetailspage from "./pages/Product-details.jsx";
import Thankyoupage from "./pages/Thank-you.jsx";
import MainFooter from "./components/Footer";
import MainHeader from "./components/Header";
import Checkoutpage from "./pages/Checkout.jsx";

function Mainlayout() {

  let location = useLocation();
  let hideLayoutRoutes = ["/thank-you"];
  let shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <MainHeader />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/collection" element={<Collectionpage />} />
        <Route path="/product-details/:id" element={<ProductDetailspage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/thank-you" element={<Thankyoupage />} />
      </Routes>

      {!shouldHideLayout && <MainFooter />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Mainlayout />
    </BrowserRouter>
  );
}

export default App;
