import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Login from "./pages/signIn/login"
import Register from "./pages/signUp/register"


function App() {
  

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/" element={<Register/>}/>
  </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
