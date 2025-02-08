import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { USER_API_END_POINT } from "../../utils/constant.js"
import { setUser } from "../redux/authslice"
import { useDispatch } from "react-redux"
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [currentTab, setCurrentTab] = useState("user")
  

  const toggleForm = () => setIsLogin(!isLogin)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-400 via-blue-200 to-white">
      <div className="w-full max-w-md">
        <TabSelector currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden mt-2">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
              {isLogin ? "Welcome Back" : "Join Us"}
              {currentTab !== "user" && ` - ${currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}`}
            </h2>
            {isLogin ? <LoginForm userType={currentTab} /> : <SignUpForm userType={currentTab} />}
            <div className="mt-6 text-center">
              <button onClick={toggleForm} className="text-blue-600 hover:underline transition duration-300">
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TabSelector = ({ currentTab, setCurrentTab }) => {
  const tabs = ["user", "doctor", "clinic", "medicine"]

  return (
    <div className="flex justify-center mb-4">
      <div className="inline-flex space-x-1 bg-white bg-opacity-75 rounded-md p-1 text-xs shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-2 py-1 rounded-md transition duration-300 ${
              currentTab === tab ? "bg-blue-600 text-white" : "bg-transparent text-blue-600 hover:bg-blue-100"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

const LoginForm = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setIsAuth } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/login`,
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, user } = response.data;

      // Store token in localStorage
      localStorage.setItem("token", `Bearer ${token}`);

      // Update Redux store with user info
      dispatch(setUser(user));

      // Update AuthContext if applicable
      setIsAuth(true);

      // Success message
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Redirect to home page
      navigate("/");
    } catch (error) {
      // Handle errors
      const errorMsg = error.response?.data?.message || "Login failed!";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleLogin}>
      <div className="space-y-2">
        <label htmlFor="email" className="block text-blue-800">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2 relative">
        <label htmlFor="password" className="block text-blue-800">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 bg-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600 hover:text-blue-800"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="text-right">
        <a href="#" className="text-xs text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Login
      </button>
    </form>
  );
};




const SignUpForm = ({ userType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Input fields
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [license, setLicense] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [shopName, setShopName] = useState("");

  const handleData = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name,
        email,
        password,
        address,
        age,
        gender,
        phoneNumber,
      };

      if (userType === "doctor") {
        payload.specialization = specialization;
        payload.license = license;
      } else if (userType === "clinic") {
        payload.clinicName = clinicName;
        payload.registrationNumber = registrationNumber;
      } else if (userType === "medicine") {
        payload.shopName = shopName;
        payload.license = license;
      }

      const response = await axios.post(
        `${USER_API_END_POINT}/signup`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

    //   toast.success("Signup successful!", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });

    //   navigate("/");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Signup failed!";
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleData}>
      <div className="space-y-2">
        <label htmlFor="name" className="block text-blue-800">Name</label>
        <input
          id="name"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-blue-800">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      

      <div className="space-y-2 relative">
        <label htmlFor="password" className="block text-blue-800">Password</label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 bg-white"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600 hover:text-blue-800"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phoneNumber" className="block text-blue-800">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          placeholder="Enter your phone number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {userType === "user" && (
        <>
          <div className="space-y-2">
            <label className="block text-blue-800">Gender</label>
            <div className="flex space-x-4">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={gender === g}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className="text-blue-700">{g}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="age" className="block text-blue-800">Age</label>
            <input
              id="age"
              type="number"
              placeholder="Enter your age"
              required
              min="0"
              value={age}
              onChange={(e) => setAge(Math.max(0, Number(e.target.value) || 0))}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}

      {userType === "doctor" && (
        <>
          <div className="space-y-2">
            <label htmlFor="specialization" className="block text-blue-800">Specialization</label>
            <input
              id="specialization"
              placeholder="Enter your specialization"
              required
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}

      {userType === "clinic" && (
        <>
          <div className="space-y-2">
            <label htmlFor="clinicName" className="block text-blue-800">Clinic Name</label>
            <input
              id="clinicName"
              placeholder="Enter your clinic name"
              required
              value={clinicName}
              onChange={(e) => setClinicName(e.target.value)}
              className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <label htmlFor="City" className="block text-blue-800">City/town</label>
        <textarea
          id="City"
          placeholder="Enter your address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Sign Up
      </button>
    </form>
  );
};

export default AuthPage