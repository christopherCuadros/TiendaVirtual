import { BrowserRouter, Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/ClientLayout"
import Home from "./pages/Home"
import Carrito from "./pages/Carrito"
import { AdminLayout } from "./layout/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"
import Orders from "./pages/admin/Orders"
import Products from "./pages/admin/Products"
import Inbox from "./pages/admin/Inbox"
import Profile from "./pages/admin/Profile"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLayout/>}>
            <Route index  element={<Home/>}/>

            <Route path="carrito" element={<Carrito />} />
            
          </Route>
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="orders" element={<Orders/>} />
            <Route path="products" element={<Products/>} />
            <Route path="inbox" element={<Inbox/>} />
            <Route path="profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
