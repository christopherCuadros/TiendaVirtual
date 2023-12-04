import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
<<<<<<< HEAD
import StickyNavbar from "../components/StickyNavbar";

const ClientLayout = () => {
    return(
        <>
            <StickyNavbar/>
                <div>
                    <Outlet/>
                </div>
=======
import Pago from "../pages/pago";
const ClientLayout = () => {
    return(
        <>
            <Navbar/>
                <div>client layout</div>

                <Pago/>
>>>>>>> f27664c (avance)
            <Footer/>
        </>
        
    )
}

export default ClientLayout;