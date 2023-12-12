import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";
import { ToastContainer } from "react-toastify";

const ClientLayout = () => {
    return (
        <>
        
            <StickyNavbar />

            <div>
            
                <Outlet />
            </div>
            
            <Footer />
            <ToastContainer
                position="bottom-right"
            
            />
        </>
    );
};

export default ClientLayout;
