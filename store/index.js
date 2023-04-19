import { configureStore } from "@reduxjs/toolkit";
import nikeSlice from "./reducer/index";
import { logger } from "redux-logger";

const store = configureStore({
  reducer: {
    nike: nikeSlice,
  },
  middleware: [logger],
});

export default store;
