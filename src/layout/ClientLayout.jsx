import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";

const ClientLayout = () => {
    return(
        <>
            <StickyNavbar/>
                <div>
                    <Outlet/>
                </div>
            <Footer/>
        </>
        
    )
}

export default ClientLayout;