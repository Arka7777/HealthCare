import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, updateUser } from "../redux/authslice";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant";
import { useContext } from "react";
import { AuthContext } from "../AuthPage/AuthContext";

const Edit = ({ open, setOpen }) => {
  if (!open) return null;
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    name: user?.name || "",
    email: user?.email || "",
    // phoneNumber: user?.phoneNumber ? String(user.phoneNumber) : "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const handleSave = async () => {
  //   try {
  //     const response = await fetch("/api/user/update", {
  //       method: "PUT",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(input),
  //     });

  //     if (!response.ok) throw new Error("Failed to update profile");

  //     const updatedUser = await response.json();
      
  //     // Update Redux store with new user data
  //     dispatch(updateUser(updatedUser));

  //     setOpen(false);
  //   } catch (error) {
  //     console.error("Update failed:", error);
  //   }
  // };
 
  const submitHandler=async (e)=>{
    e.preventDefault();
    // const formData=new FormData();
    // formData.append("name",input.name);
    // formData.append("email",input.email);
    // formData.append("address",input.address);
    // console.log(input)
    const updatedData = {
      name: input.name,
      email: input.email,
      address: input.address,
    };
    try{
      console.log(updatedData)
      const res=await axios.put(`http://localhost:8000/api/v1/user/profile/update/${user._id}`,updatedData);
      console.log(res)
      if(res){
        
        dispatch(setUser(res.data.user));

        //toast asbe

      }
    }
    catch(error){
      console.log(error)
    }
    setOpen(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="w-2/3 bg-slate-300 shadow-xl rounded-[5px] pt-[30px] pb-[50px] relative">
        <p className="text-center text-blue-500 text-[40px] font-bold">
          Update Your Profile
        </p>
        <form onSubmit={submitHandler} action=""> <div className="mt-[50px] text-center">
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-2/3 rounded-[5px] px-[10px] h-[50px] text-[20px]"
          />

          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-2/3 rounded-[5px] px-[10px] h-[50px] text-[20px] mt-[35px]"
          />

          {/* <input
            type="number"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={handleChange}
            placeholder="Enter Your Contact No."
            className="w-2/3 rounded-[5px] px-[10px] h-[50px] text-[20px] mt-[35px]"
          /> */}

          <input
            type="text"
            name="address"
            value={input.address}
            onChange={handleChange}
            placeholder="Enter Your City"
            className="w-2/3 rounded-[5px] px-[10px] h-[50px] text-[20px] mt-[35px]"
          />

          <div className="mt-[30px] flex justify-center gap-[30px]">
            <button
              onClick={() => setOpen(false)}
              className="px-[10px] py-[8px] w-[80px] bg-gray-500 hover:bg-gray-600 text-white rounded-[5px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-[10px] py-[8px] w-[80px] bg-blue-500 hover:bg-blue-700 text-white rounded-[5px]"
            >
              Save
            </button>
          </div>
        </div></form>
       
      </div>
    </div>
  );
};

export default Edit;
