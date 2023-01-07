import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { userService } from "./services/index";
// create a slice
const iconslice = createSlice({
  name: "setting",
  initialState: { icon: "moon", local: "fa" },
  reducers: {
    iconMoon: (state) => {
      state.icon = "moon";
    },
    iconSun: (state) => {
      state.icon = "sun";
    },
    toggleLocal: (state: any, action: any) => {
      state.local = action.payload;
    },
  },
});
// config the store
export const { toggleLocal } = iconslice.actions;
const reducer = combineReducers({
  setting: iconslice.reducer,
  [userService.reducerPath]: userService.reducer,
});
const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false })?.concat(
      userService.middleware
    ),
});
// export default the store
export default store;
// export the actionexport
const iconAction = iconslice.actions;
