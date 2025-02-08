import { createBrowserRouter, RouterProvider, Navigate, useNavigate } from "react-router-dom"
import Navbar from "./Home_components/Navbar"
import Hero from "./Home_components/HeroSection/Hero"
import Feature from "./Home_components/Feature"
import How_it_works from "./Home_components/How_it_works"
import Our_impacts from "./Home_components/Our_impacts"
import Blog from "./Home_components/Blog"
import Footer from "./Home_components/Footer"
import About_us from "./Home_components/About_us"
import Find_Doctors from "./FindDoctors/Find_Doctors"
import Search_Medicines from "./Home_components/Search_Medicines"
import Winter from "./Blog_article_components/Winter"
import { Five } from "./Blog_article_components/Five"
import Insurance from "./Blog_article_components/Insurance"
import Mental_health from "./Blog_article_components/Mental_health"
import AuthPage from "./AuthPage/AuthPage"
import ClinicListPage from "./Clinic/ClinicListPage"
import ClinicPage from "./Clinic/ClinicPage"
import UserProfile from "./Profile/UserProfile"
import Contact_us from "./Home_components/Contact_us"
import ClinicAdminDashboard from "./AdminPanels/ClinicAdminPanel/ClinicAdminPanel"
import { useEffect, useState } from "react"
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "./AuthPage/AuthContext";
import Edit from "./Profile/Edit"
import { useSelector ,useDispatch} from "react-redux";
// import store from "../redux/store";
import { setUser } from "./redux/authslice"


const ProtectedRoute = ({ children }) => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  if (!isAuth) {
    return <Navigate to="/login" replace />
  }
  return <>{children}</>
}

export default function App() {
  // const navigate = useNavigate()
  // const [isAuth,setIsAuth] = useState(false)
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { isAuth, setIsAuth,bookings,setBookings} = useContext(AuthContext)
  const token = localStorage.getItem("token")
  // if (!token) {
  //       setIsAuth(false);
  //       // navigate("/login"); // Redirect to login if no token
  //       return;

  //     }
  const client = axios.create({
    baseURL: "/api",
  })
  // const [user,setUser] = useState(null)

  const getUser = async () => {
    try {
      const headers = {
        "Authorization": token,
      };
      const response = await client.post('/api/v1/getUser', null, { headers })

      console.log(response.data)
      dispatch(setUser(response.data))
      setIsAuth(true)
    } catch (error) {
      console.log("fetching error :", error)
      setIsAuth(false)
    }

  }
   const getBookings = async () => {
    try {
      var response
      if(user){
         response = await client.post(`/api/v1/book/getBookings/${user.name}`)
      } 
       setBookings(Array.isArray(response.data.bookings) ? response.data.bookings : [])
      console.log("bookings: ",bookings)
    } catch (error) {
      console.log("fetching  bookings error :", error)
    }

  }
  
  useEffect(() => {
    getUser(); // Fetch user data
    
  }, [token]); // Runs once when the component mounts

  useEffect(() => {
    if (user) {  // Ensure user is set before logging
     getBookings();
      const timeout = setTimeout(() => {
       
        console.log("User:", user);
      }, 2000); // Delay console log by 2 seconds

      return () => clearTimeout(timeout); // Cleanup timeout on unmount
    }
  }, [user]); // Runs every time `user` state updates
  

  

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Hero />
          <Feature />
          <How_it_works />
          <Our_impacts />
          <Blog />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar />
          {isAuth?<UserProfile/>:<AuthPage />}
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar />
          <AuthPage />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          {isAuth ? <About_us /> : <AuthPage />}
        </>
      ),
    },
    {
      path: "/contact_us",
      element: (
        <ProtectedRoute>
          <Navbar />
          <Contact_us />
        </ProtectedRoute>
      ),
    },
    {
      path: "/userProfile",
      element: (
        <ProtectedRoute>
          <Navbar />
          <UserProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "/find-doctors",
      element: (
        <ProtectedRoute>
          <Navbar />
          <Find_Doctors />
        </ProtectedRoute>
      ),
    },
    {
      path: "/search-medicines",
      element: (
        <ProtectedRoute>
          <Navbar />
          <Search_Medicines />
        </ProtectedRoute>
      ),
    },
    {
      path: "/discover-clinics",
      element: (
        <ProtectedRoute>
          <Navbar />
          <ClinicListPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/clinic-page",
      element: (
        <ProtectedRoute>
          <Navbar />
          <ClinicPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/winter",
      element: (
        <>
          <Navbar />
          <Winter />
        </>
      ),
    },
    {
      path: "/five",
      element: (
        <>
          <Navbar />
          <Five />
        </>
      ),
    },
    {
      path: "/insurance",
      element: (
        <>
          <Navbar />
          <Insurance />
        </>
      ),
    },
    {
      path: "/mental_health",
      element: (
        <>
          <Navbar />
          <Mental_health />
        </>
      ),
    },

    {
      path: "/UserProfile/Edit",
      element: (
        <>
          <Navbar />
          <Edit />
        </>
      ),
    },
    //Admin Panels
    //Clinic Admin Panel
    {
      path: "/ClinicAdminDashboard",
      element: (
        <>
          <Navbar />
          <ClinicAdminDashboard />
        </>
      ),
    },
  ])

  return <RouterProvider router={router} />
}