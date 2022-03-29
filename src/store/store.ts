import { createSlice, configureStore } from "@reduxjs/toolkit";

import claroImg from "../site-assets/claro/claro.png";
import luminaImg from "../site-assets/lumina/mizlala-gret-mullet-fillet.jpg";
import tigerLilyImg from "../site-assets/tiger-lily/tiger-lili.jpg";
import padKiImg from "../site-assets/padki/PadKiMao.jpg";
import garbanzoImg from "../site-assets/garbanzo/GarbanzoFrito.jpg";
import smokedPizzaImg from "../site-assets/smoked-pizza/SmokedPizza.jpg";
import spicyImg from "../site-assets/spicy/spicy-icon.png";
import vegetarianImg from "../site-assets/vegetarian/vegetarian.png";
import veganImg from "../site-assets/vegan/vegan-icon.png";
import OnzaImg from "../site-assets/onza/screen-shot-2019-01-06-at-10-55-45.png";
import MashyaImg from "../site-assets/mashya/screen-shot-2019-01-03-at-18-28-50.png";
import KitchenMarketImg from "../site-assets/kitchen-market/screen-shot-2019-01-06-at-10-57-26.png";

const initialState = {
  restaurants: [
    { resName: "Claro", img: claroImg, chef: "Ran Shmueli" },
    { resName: "Lumina", img: luminaImg, chef: "Ran Shmueli" },
    { resName: "Tiger Lilly", img: tigerLilyImg, chef: "Yanir Green" },
    { resName: "Claro 2", img: claroImg, chef: "Ran Shmueli" },
    { resName: "Lumina 2", img: luminaImg, chef: "Ran Shmueli" },
    { resName: "Tiger Lilly 2", img: tigerLilyImg, chef: "Yanir Green" },
  ],
  signatureDishes: [
    {
      dishName: "Padki Mao",
      img: padKiImg,
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      resName: "Tiger Lilly",
      price: 88,
      spicy: true,
      vagi: false,
      vegan: false,
    },
    {
      dishName: "Garbanzo Frito",
      img: garbanzoImg,
      description:
        "Polenta fingers, veal cheek,  magic chili cured lemon  cream, yellow laksa",
      resName: "Kam Keb",
      price: 98,
      spicy: false,
      vagi: false,
      vegan: false,
    },
    {
      dishName: "Smoked Pizza",
      img: smokedPizzaImg,
      description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
      resName: "Popina",
      price: 65,
      spicy: false,
      vegetarian: false,
      vegan: true,
    },
    {
      dishName: "Padki Mao 2",
      img: padKiImg,
      description:
        "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
      resName: "Tiger Lilly",
      price: 88,
      spicy: true,
      vagi: false,
      vegan: false,
    },
    {
      dishName: "Garbanzo Frito 2",
      img: garbanzoImg,
      description:
        "Polenta fingers, veal cheek,  magic chili cured lemon  cream, yellow laksa",
      resName: "Kam Keb",
      price: 98,
      spicy: false,
      vagi: false,
      vegan: false,
    },
    {
      dishName: "Smoked Pizza 2",
      img: smokedPizzaImg,
      description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
      resName: "Popina",
      price: 65,
      spicy: false,
      vegetarian: false,
      vegan: true,
    },
  ],
  legendIcons: [
    { iconName: "Spicy", img: spicyImg },
    { iconName: "Vegetarian", img: vegetarianImg },
    { iconName: "Vegan", img: veganImg },
  ],
  chefs: [
    { resName: "Onza", img: OnzaImg },
    { resName: "Kitchen Market", img: KitchenMarketImg },
    { resName: "Mashya", img: MashyaImg },
  ],
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialState.restaurants,
  reducers: {},
});

const dishesSlice = createSlice({
  name: "signatureDishes",
  initialState: initialState.signatureDishes,
  reducers: {},
});

const legendSlice = createSlice({
  name: "legendIcons",
  initialState: initialState.legendIcons,
  reducers: {},
});

const chefsSlice = createSlice({
  name: "legendIcons",
  initialState: initialState.chefs,
  reducers: {},
});

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice.reducer,
    signatureDishes: dishesSlice.reducer,
    legend: legendSlice.reducer,
    chefs: chefsSlice.reducer,
  },
});

export const restaurantsActions = restaurantsSlice.actions;
export const signatureDishesActions = dishesSlice.actions;
export const legendIconsActions = legendSlice.actions;
export const chefs = chefsSlice.actions;

export default store;
