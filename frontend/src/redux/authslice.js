import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
  name:"auth",
  initialState:{
    loading:false,
    user:null
  },
  reducers:{
    setLoading:(state,action)=>{
      state.loading=action.payload;
    },
    setUser:(state,action)=>{
      state.user=action.payload
    },
    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  }
})

export const {setLoading,setUser,updateUser}=authSlice.actions;
export default authSlice.reducer