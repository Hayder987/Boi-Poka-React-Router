import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { CirclesWithBar } from 'react-loader-spinner'



const Root = () => {
    const navigation  = useNavigation();
    console.log(navigation)
    return (
        <div className="container mx-auto p-3 md:px-12">
            <NavBar></NavBar>
            {
              navigation==="loading"?<div className="flex justify-center items-center">
                <CirclesWithBar
               height="100"
               width="100"
               color="#4fa94d"
               outerCircleColor="#4fa94d"
               innerCircleColor="#4fa94d"
               barColor="#4fa94d"
               ariaLabel="circles-with-bar-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
               />
              </div>:
              <Outlet></Outlet>
            }
            
            <Footer></Footer>
             
            
        </div>
    );
};

export default Root;