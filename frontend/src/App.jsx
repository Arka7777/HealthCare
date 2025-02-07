import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./Home_components/Navbar"
import Hero from "./Home_components/HeroSection/Hero"
import Feature from "./Home_components/Feature"
import ContactUs from "./Home_components/Contact_us"




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

  ])

  return <RouterProvider router={router} />
}