import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Header from "./components/header/header"


function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
