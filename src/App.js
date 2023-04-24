import { Routes, Route, useNavigate, createSearchParams } from "react-router-dom"

import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"

import { useCart } from './context/cart'
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"
import Profile from "./components/Profile"
import { Footer } from "./components/Footer"
import CategoryNavbar from "./components/CategoryNavbar"
import { Electronics } from "./pages/electronics/Electronics"
import { Men } from "./pages/clothing/Men"
import { Women } from "./pages/clothing/Women"
import ImageSlider from "./components/ImageSlider"
import ServiceSection from "./components/ServiceSection"
function App() {

  const navigate = useNavigate();
  const { cartItemCount } = useCart()

  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <div>
      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      <ImageSlider/>
      <CategoryNavbar/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginButton/>}/>
        <Route path="/logout" element={<LogoutButton/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/mens-clothing" element={<Men/>}/>
        <Route path="/womens-clothing" element={<Women/>}/>
      </Routes>
      <ServiceSection/>
      <Footer/>
    </div>
  );
}

export default App;
