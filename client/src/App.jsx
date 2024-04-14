import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home.jsx"
import Register from "./pages/register/register.jsx"
import Login from "./pages/login/login.jsx"
import Header from "./components/header/header.jsx"
import Products from "./pages/products/products.jsx"
import Vision from "./pages/vision/vision.jsx"


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/vision" element={<Vision/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
