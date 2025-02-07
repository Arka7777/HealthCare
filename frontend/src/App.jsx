import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./Home_components/Navbar"
import Hero from "./Home_components/HeroSection/Hero"
import Feature from "./Home_components/Feature"
import ContactUs from "./Home_components/Contact_us"
import Find_Doctors from "./FindDoctors/Find_Doctors"
import About_us from "./Home_components/About_us.jsx"
import Search_Medicines from "./Home_components/Search_Medicines"
import HowItWorks from "./Home_components/How_it_works"
import ClinicListPage from "./Clinic/ClinicListPage"
import ClinicPage from "./Clinic/ClinicPage.jsx"
import RateClinicPage from "./Clinic/RateClinicPage.jsx"
import OurImpacts from "./Home_components/Our_impacts.jsx"
import Blog from "./Home_components/Blog.jsx"
import clinicData from "./Clinic/ClinicData"

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
          <OurImpacts/>
          <Blog/>
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
      )
    },{
      path: "/search-medicines",
      element: (
        <>
          <Navbar />
          <Search_Medicines />
        </>
      ),
    },
    {
      path: "/discover-clinics",
      element: (
        <>
          <Navbar />
          <ClinicListPage />
        </>
      ),
    },
    {
      path: "/discover-clinics",
      element: (
        <>
          <Navbar />
          <ClinicListPage />
        </>
      ),
    },
    {
      path: "/clinic-page",
      element: (
        <>
          <Navbar />
          <ClinicPage />
        </>
      ),
    },
    {
      path: "/clinic/:id",
      element: (
        <>
          <Navbar />
          <ClinicPage state={{ clinic: clinicData }}/>
        </>
      ),
    },
    {
      path: "/rate-clinic/:id",
      element: (
        <>
          <Navbar />
          <RateClinicPage />
        </>
      ),
    },
  ])

  return <RouterProvider router={router} />
}