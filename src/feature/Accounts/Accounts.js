import { createSlice } from "@reduxjs/toolkit";



const accountsSlice = createSlice({
  name: "accounts",
  initialState: {
    value: {
        accountsList: [],
    }
  },
  reducers: {
    accountsChange: (state, action) => {
      state.value.accountsList = action.payload;
      console.log("the data is this", state.value.accountsList);

    }
  }
});

export const { accountsChange } = accountsSlice.actions;
export default accountsSlice.reducer;