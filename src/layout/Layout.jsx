import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar></Navbar>

                {/* Main content area with flexible height */}
                <div className="flex-grow mb-16">
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>
            </div>
        </>
    );
};

export default Layout;