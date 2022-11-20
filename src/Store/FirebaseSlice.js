import { createSlice } from "@reduxjs/toolkit";

const FirebaseSlice = createSlice({
  name: "login",
  initialState: [],
  reducers: {
    addItem(state, action) {
      console.log(state);
      return (state = action.payload);
    },
  },
});

export const { addItem } = FirebaseSlice.actions;
export default FirebaseSlice.reducer;
