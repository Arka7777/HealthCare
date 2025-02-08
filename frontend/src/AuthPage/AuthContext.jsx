import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [bookings,setBookings] = useState([])
  const [clinics , setClinics] = useState([])

  useEffect(() => {
    // Check for token on mount
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser ,bookings,setBookings,clinics,setClinics}}>
      {children}
    </AuthContext.Provider>
  );
};
