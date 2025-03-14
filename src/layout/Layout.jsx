import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <div className="flex flex-col min-h-screen"> */}
            <div className="flex flex-col min-h-screen mt-24">

                {/* Main content area with flexible height */}
                <div className="flex-grow ">
                    <Outlet></Outlet>
                </div>

                <Footer></Footer>
            </div>
        </>
    );
};

export default Layout;