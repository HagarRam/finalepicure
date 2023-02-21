import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json'
export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    value: data.dishes,
    

},
  reducers: {
    // setRestaurants: (state, action) => {
    //   state.value = action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { setRestaurants } = restaurantsSlice.actions;

export default dishesSlice.reducer;
