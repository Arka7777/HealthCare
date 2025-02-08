import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "../AuthPage/AuthContext";

const NavLink = ({ to, children, mobile = false }) => {
  const baseClasses = "text-blue-600 hover:text-blue-800 transition-colors duration-200";
  const mobileClasses = "block px-3 py-2 rounded-md text-base font-medium";
  const desktopClasses = "text-sm font-medium";

  return (
    <Link to={to} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  );
};

const Button = ({ children, className = "", ...props }) => (
  <Link to="/login" className={`w-full block text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200 ${className}`} {...props}>
    {children}
  </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const {isAuth} = useContext(AuthContext)

  return (
    <nav className="sticky top-0 bg-white z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex-shrink-0 mr-auto">
            <Link to="/" className="text-2xl font-bold text-blue-600 flex gap-[10px]">
              <img src="https://cdn-icons-gif.flaticon.com/18113/18113585.gif" className="h-[40px] w-[40px]" alt="" />
              <h1>TechCare</h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact_us">Contact Us</NavLink>
            <NavLink to="/med_sale_ForeCasting">Forecasting</NavLink>
            {isAuth?<NavLink to="/userProfile">Profile</NavLink>:
           <div className="hidden md:flex items-center ml-8">
            <Button>Login</Button>
          </div>}
          </div>

          

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <FiX className="block h-6 w-6" aria-hidden="true" /> : <FiMenu className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" mobile>Home</NavLink>
            <NavLink to="/about" mobile>About Us</NavLink>
            <NavLink to="/contact_us" mobile>Contact Us</NavLink>
            <NavLink to="/med_sale_ForeCasting">Forecasting</NavLink>


            {false?<NavLink to="/userProfile" mobile>Profile</NavLink>:
            <div className="px-4 py-3 border-t border-blue-600">
              <Button>Login</Button>
            </div>}
          </div>
          
        </div>
      )}
    </nav>
  );
}