import React, { useState, useEffect, useRef, useContext } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaCity } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthPage/AuthContext";
import Edit from "../Profile/Edit";
import store from "../redux/store";

const UserProfile = () => {
  const { user } = useSelector((store) => store.auth);
  const { bookings, setUser, setAuth } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  // Load saved profile image from localStorage
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") ||
      "https://th.bing.com/th/id/OIP.GKAbRpYzDlJa139WC8xPtwHaIC?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  );

  // Update the image when changed
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("profileImage", reader.result); // Save to localStorage
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setAuth(false);
    setUser(null);
    navigate("/");
  };

  return (
    <div className="pb-12">
      <div className="flex justify-end px-6 mt-6" onClick={logOut}>
        <a
          href="#"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition"
        >
          Log Out
        </a>
      </div>

      <div className="sec1 flex flex-col md:flex-row items-center text-center px-6 md:px-[150px] py-6 gap-12 md:gap-32">
        <div className="w-full md:w-auto md:p-[10px] l">
          <p className="text-3xl md:text-4xl font-semibold text-blue-400">
            Welcome to your Profile,
          </p>
          <p className="text-4xl md:text-5xl font-bold text-blue-700 md:mt-2">
            {user?.name}
          </p>
        </div>

        <div className="relative w-[140px] h-[140px] md:w-[270px] md:h-[270px] mt-[-20px] md:mt-10 mx-auto rounded-full bg-blue-400 overflow-hidden shadow-md md:shadow-xl flex items-center justify-center">
          <img className="h-full w-full object-cover" src={profileImage} alt="Profile" />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />

          <div
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white p-2 rounded-full shadow-md flex items-center justify-center cursor-pointer z-10 hover:bg-gray-300 transition"
            onClick={() => fileInputRef.current.click()}
          >
            <IoCameraOutline className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>

      <div className="sec2 md:mt-[30px] px-4 md:px-24 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="text-2xl md:text-3xl font-bold text-center text-white bg-gradient-to-r from-blue-300 to-blue-600 rounded-lg p-2">
            Details
          </div>

          <div className="mt-6 space-y-4 text-lg font-semibold px-4">
            <div className="flex items-center gap-3">
              <RxAvatar className="h-6 w-6" />
              <p>{user?.name}</p>
            </div>

            <div className="flex items-center gap-3">
              <IoIosCall className="h-6 w-6" />
              <p>9737483737</p>
            </div>

            <div className="flex items-center gap-3">
              <MdOutlineMail className="h-6 w-6" />
              <p>{user?.email}</p>
            </div>

            <div className="flex items-center gap-3">
              <CiLocationOn className="h-6 w-6" />
              <p>India</p>
            </div>

            <div className="flex items-center gap-3">
              <FaCity className="h-6 w-6" />
              <p>{user?.address}</p>
            </div>

            <button
              className="mt-4 text-2xl inline-block px-4 py-2 rounded-lg hover:text-red-500 transition"
              onClick={() => setOpen(true)}
            >
              <FaRegEdit />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="text-2xl md:text-3xl font-bold text-center text-white bg-gradient-to-r from-blue-300 to-blue-600 rounded-lg p-2">
            Booking History
          </div>

          <div className="mt-4 space-y-4">
            {bookings &&
              bookings.map((booking, index) => (
                <div
                  key={index}
                  className="book1 flex justify-between items-center px-4 py-2 border border-black rounded-md hover:text-blue-700 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3 font-semibold">
                    <FaRegBookmark className="text-lg" />
                    <a href="/manage-appointments">
                      <i>{booking.drName}</i>
                    </a>
                  </div>
                  <p className="font-semibold">{booking.date?.split("T")[0]}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Edit open={open} setOpen={setOpen} />
    </div>
  );
};

export default UserProfile;
