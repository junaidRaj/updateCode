import { configureStore } from "@reduxjs/toolkit";
import FirebaseSlice from "./FirebaseSlice";

const Store = configureStore({
  reducer: {
    login: FirebaseSlice,
  },
});

export default Store;
