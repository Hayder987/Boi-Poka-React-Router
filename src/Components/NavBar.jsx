import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const items = <>
      <div className="navBar flex flex-col  md:flex-row gap-4 md:gap-10">
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/listedbook"><li>Listed Books</li></NavLink>
        <NavLink to="/contact"><li>Contact Us</li></NavLink>
      </div>
    </>

    return (
        <div className="mb-12">
           <div className="navbar bg-base-100">
             <div className="navbar-start">
               <div className="dropdown">
                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth="2"
                       d="M4 6h16M4 12h8m-8 6h16" />
                   </svg>
                 </div>
                 <ul
                   tabIndex={0}
                   className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                   {items}
                 </ul>
               </div>
               <a className="btn btn-ghost text-2xl">Book Vibe</a>
             </div>
             <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
               {items}
               </ul>
             </div>
             <div className="navbar-end">
               <Link to ="/contact"><a className="btn bg-blue-700 text-white">Register</a></Link>
             </div>
           </div>
            
        </div>
    );
};

export default NavBar;