import { IChef } from "../models/chefs.model";
import { IDish } from "../models/dishes.model";
import { ILegend } from "../models/legend.model";
import { IRestaurant } from "../models/restaurant.model";

export interface RootState {
  restaurants: IRestaurant[];
  signatureDishes: IDish[];
  chefs: IChef[];
  legend: ILegend[];
  user: object | null;
  version: string;
}
