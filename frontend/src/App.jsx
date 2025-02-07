import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./Home_components/Navbar"
import Hero from "./Home_components/HeroSection/Hero"
import Feature from "./Home_components/Feature"
import ContactUs from "./Home_components/Contact_us"
import Find_Doctors from "./FindDoctors/Find_Doctors"
import Search_Medicines from "./Home_components/Search_Medicines"
import HowItWorks from "./Home_components/How_it_works"



export default function App() {






  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Feature />
          <HowItWorks/>
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
      path: "/search-medicines",
      element: (
        <>
          <Navbar />
          <Search_Medicines />
        </>
      ),
    },
  ])

  return <RouterProvider router={router} />
}