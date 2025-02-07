import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./Home_components/Navbar"
import Hero from "./Home_components/HeroSection/Hero"
import Feature from "./Home_components/Feature"
import ContactUs from "./Home_components/Contact_us"
import Find_Doctors from "./FindDoctors/Find_Doctors"
import About_us from "./Home_components/About_us.jsx"



export default function App() {






  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Feature />
        </>
      ),
    },
    {
      path: "/contact_us",
      element: (
        <>
          <Navbar />
          <ContactUs />
        </>
      ),
    },

    {
      path: "/find-doctors",
      element: (
        <>
          <Navbar />
          <Find_Doctors />
          </>
        
      ),
    },

    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About_us />
        </>
      ),
    },
  ])

  return <RouterProvider router={router} />
}