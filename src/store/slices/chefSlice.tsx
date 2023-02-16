import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json'
export const chefSlice = createSlice({
  name: "chef",
  initialState: {
    value: data.chefs
},
  reducers: {
    // setRestaurants: (state, action) => {
    //   state.value = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { setRestaurants } = restaurantsSlice.actions;

export default chefSlice.reducer;
