import { createSlice } from "@reduxjs/toolkit";
import data from '../../data.json'
export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    value: data.restaurant,
    filteredValue: data.restaurant,
  },
  reducers: {
    setAllRestuarants:(state)=>{
      state.filteredValue=  data.restaurant;
    },
    setPopularRestuarants:(state)=>{
      state.filteredValue=  data.restaurant.filter(restaurant =>   restaurant.popular === true
      );
    },
    setNewRestuarants:(state)=>{
      state.filteredValue=  data.restaurant.filter(restaurant =>   restaurant.newRest === true
      );
    },
    setOpenNow:(state)=>{
     

      state.filteredValue=  data.restaurant.filter(restaurant =>   restaurant.newRest === true
      );
    },
  
  },
});



export const { setAllRestuarants, setPopularRestuarants, setNewRestuarants } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;

