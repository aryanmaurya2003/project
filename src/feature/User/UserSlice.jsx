import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
 
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : {};
 
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: getUserFromStorage()
  },
  reducers: {
    userChange: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { userChange } = userSlice.actions;
export default userSlice.reducer;
