import { IChef } from "./chefs.model";
import { IDish } from "./dishes.model";

export interface IRestaurant {
  name: string;
  image: string;
  isPop: boolean;
  signatureDish: IDish;
  chef: IChef;
  dishes: IDish[];
}
