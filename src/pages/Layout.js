import ".././styles/Layout.css";
import ".././styles/styles.css";
import pccmlogo from ".././assets/pccm_logo.png";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from ".././components/Footer.js";
import CTA from ".././components/CTA.js";
function Layout() {
    return (
        <>
            
            <Navbar/>
            <Outlet />
            <CTA />
            <Footer />
        </>
    );
}

export default Layout;