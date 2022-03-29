import React, { useEffect, useState } from "react";
import "./cotw-component.scss";
import chefImg from "../../site-assets/chef/group-15.png";
import CardComponent from "../card/card-component";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types";
import Slider from "react-slick";
import {
  fetchChefOfTheWeek,
  fetchSpecificChefRestaurants,
} from "../../middleware/middleware";
import { IChef } from "../../models/chefs.model";
import { IRestaurant } from "../../models/restaurant.model";
import { IChefOfTheWeek } from "../../models/chef-of-the-week.model";

const CotwComponent = () => {
  const [chefOfTheWeek, setChefOfTheWeek] = useState<IChef>();
  const [chefRestaurants, setChefRestaurants] = useState<IRestaurant[]>([]);
  const chefs = useSelector((state: RootState) => {
    return state.chefs;
  });

  useEffect(() => {
    async function getChefOfTheWeek() {
      let chefOfTheWeek = await fetchChefOfTheWeek();

      setChefOfTheWeek(chefOfTheWeek[0].chefOfTheWeek);
      getChefRestaurants(chefOfTheWeek[0].chefOfTheWeek._id);
    }

    async function getChefRestaurants(id: IChef["_id"]) {
      let chefRestaurants = await fetchSpecificChefRestaurants(id);
      setChefRestaurants(chefRestaurants);
    }

    getChefOfTheWeek();
  }, []);

  const carouselSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          arrows: false,
          slidesToShow: 2.5,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
    ],
  };
  return (
    <div className="chefCompContainer">
      <div className="chefCon">
        <img alt="" className="chefImg" src={chefOfTheWeek?.img} />
        <span className="description">{chefOfTheWeek?.description}</span>
      </div>
      <div className="chefsRestaurantsCon">
        <div className="chefsRestaurants">
          {chefOfTheWeek?.name}’s restaurants :
        </div>
        <div className="cotwSliderCon">
          <Slider {...carouselSettings}>
            {chefRestaurants.map((restaurant, i) => {
              return (
                <CardComponent
                  key={i}
                  cardType="chefs"
                  img={restaurant.image}
                  resName={restaurant.name}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CotwComponent;
