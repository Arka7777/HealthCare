import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../AuthPage/AuthContext";

const NavLink = ({ to, children, mobile = false }) => {
  const baseClasses = "text-gray-800 hover:text-gray-500 transition-colors duration-300";
  const mobileClasses = "block px-4 py-2 rounded-md text-lg font-medium";
  const desktopClasses = "text-sm font-medium";

  return (
    <Link to={to} className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}>
      {children}
    </Link>
  );
};

const Button = ({ children, className = "", ...props }) => (
  <Link
    to="/login"
    className={`w-full block text-center px-5 py-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg ${className}`}
    {...props}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { isAuth, user } = useContext(AuthContext);
  
  return (
    <nav className="sticky top-0 bg-white bg-opacity-80 backdrop-blur-lg z-50 shadow-md border-b border-gray-300">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800 flex gap-3 items-center">
              <img
                src="https://cdn-icons-gif.flaticon.com/18113/18113585.gif"
                className="h-[40px] w-[40px] drop-shadow-lg"
                alt="Logo"
              />
              <h1 className="tracking-wide shadow-text">TechCare</h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact_us">Contact Us</NavLink>
            {isAuth ? (
              <Link to="/userProfile" className="flex items-center gap-2">
                <FaUserCircle className="text-gray-700 h-10 w-10" />
              </Link>
            ) : (
              <Button>Login</Button>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-500 p-2 transition-all duration-300">
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-xl py-4 px-6 space-y-2 border-t border-gray-300 transition-all duration-300 shadow-lg rounded-b-lg">
          <NavLink to="/" mobile>Home</NavLink>
          <NavLink to="/about" mobile>About Us</NavLink>
          <NavLink to="/contact_us" mobile>Contact Us</NavLink>
          {isAuth ? (
            <NavLink to="/userProfile" mobile>Profile</NavLink>
          ) : (
            <Button>Login</Button>
          )}
        </div>
      )}
    </nav>
  );
}
