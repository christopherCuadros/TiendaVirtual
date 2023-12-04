import { BrowserRouter, Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/ClientLayout"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLayout/>}>
            <Route index  element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
