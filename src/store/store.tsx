import { configureStore } from "@reduxjs/toolkit";
import chefReducer from './slices/chefSlice'
import restaurantsReducer from './slices/restaurantsSlice'
import dishesReducer from './slices/dishesSlice'
export default configureStore({
    reducer: {
      chef: chefReducer,
      restaurants: restaurantsReducer,
      dishes: dishesReducer,
    },
  });