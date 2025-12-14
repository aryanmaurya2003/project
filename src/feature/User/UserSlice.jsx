import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
  try {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : {};
  } catch {
    return {};
  }
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: getUserFromStorage()
  },
  reducers: {
    userChange: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    }
  }
});

export const { userChange } = userSlice.actions;
export default userSlice.reducer;
