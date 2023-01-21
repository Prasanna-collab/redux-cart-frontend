import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartVisible: false, notification: null },
  reducers: {
    toogle(state) {
      state.cartVisible = !state.cartVisible;
    },
    showNotification(state, action) {
     const newItem= action.payload;
      state.notification = {
        status: newItem.status,
        title: action.payload.title,    //both syntax are same.
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
