import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";



const Root = () => {
    return (
        <div className="container mx-auto p-3 md:px-12">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;