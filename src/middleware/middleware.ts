import axios from "axios";
import { IChefOfTheWeek } from "../models/chef-of-the-week.model";
import { IChef } from "../models/chefs.model";
import { IRestaurant } from "../models/restaurant.model";

const BASE_URL = "http://localhost:4000/api/v1/";

export const fetchAllRestaurants = async () => {
  let res = await axios.get<IRestaurant[]>(`${BASE_URL}restaurants/`);
  let restaurants = res.data;
  return restaurants;
};

export const fetchPopRestaurants = async () => {
  let res = await axios.get<IRestaurant[]>(
    `${BASE_URL}restaurants/pop-restaurants`
  );
  let popRestaurants = res.data;
  return popRestaurants;
};

export const fetchSpecificRestaurants = async () => {
  let specificRestaurant;
  await axios.get(`${BASE_URL}restaurants/:id`).then((res) => {
    console.log(res.data);
    specificRestaurant = res.data;
  });
  return specificRestaurant;
};

export const fetchAllChefs = async () => {
  let allChefs;
  await axios.get(`${BASE_URL}chefs/`).then((res) => {
    console.log(res.data);
    allChefs = res.data;
  });
  return allChefs;
};

export const fetchSpecificChef = async () => {
  let specificChef;
  await axios.get(`${BASE_URL}chefs/:id`).then((res) => {
    console.log(res.data);
    specificChef = res.data;
  });
  return specificChef;
};

export const fetchSpecificChefRestaurants = async (id: IChef["_id"]) => {
  let res = await axios.get<IRestaurant[]>(
    `${BASE_URL}restaurants/chef-restaurants/${id}`
  );
  let specificChefRestaurants = res.data;
  return specificChefRestaurants;
};

export const fetchChefOfTheWeek = async () => {
  let res = await axios.get<IChefOfTheWeek[]>(
    `${BASE_URL}chefs/chef-of-the-week`
  );
  let chefOfTheWeek = res.data;
  return chefOfTheWeek;
};

export const dishes = axios.get(`${BASE_URL}dishes/`).then((res) => {
  return res.data;
});

export const specificDish = axios.get(`${BASE_URL}dishes/:id`).then((res) => {
  return res.data;
});
