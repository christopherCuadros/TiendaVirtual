import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pago from "../pages/pago";
const ClientLayout = () => {
    return(
        <>
            <Navbar/>
                <div>client layout</div>

                <Pago/>
            <Footer/>
        </>
        
    )
}

export default ClientLayout;