import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./Home_components/Navbar"
import Hero from "./Home_components/HeroSection/Hero"
import Feature from "./Home_components/Feature"
import Find_Doctors from "./FindDoctors/Find_Doctors"




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
      path: "/find-doctors",
      element: (
        <>
          <Navbar />
          <Find_Doctors />
          </>
        
      ),
    },

    
    
  ])

  return <RouterProvider router={router} />
}