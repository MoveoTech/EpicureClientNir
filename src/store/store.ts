import { createSlice, configureStore } from "@reduxjs/toolkit";

import spicyImg from "../site-assets/spicy/spicy-icon.png";
import vegetarianImg from "../site-assets/vegetarian/vegetarian.png";
import veganImg from "../site-assets/vegan/vegan-icon.png";

const initialState = {
  legendIcons: [
    { iconName: "Spicy", img: spicyImg },
    { iconName: "Vegetarian", img: vegetarianImg },
    { iconName: "Vegan", img: veganImg },
  ],
};

const legendSlice = createSlice({
  name: "legendIcons",
  initialState: initialState.legendIcons,
  reducers: {},
});

const store = configureStore({
  reducer: {
    legend: legendSlice.reducer,
  },
});

export const legendIconsActions = legendSlice.actions;

export default store;
