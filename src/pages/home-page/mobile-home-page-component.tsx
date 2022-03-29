import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header/header-component.tsx";
import CotwComponent from "../../components/chef-of-the-week/cotw-component.tsx";
import "./mobile-home-page-component.scss";

import siteLogo from "../../site-assets/site-logo/about-logo@3x.png";
import googlePlayIcon from "../../site-assets/Icons/path.svg";
import AppleIcon from "../../site-assets/Icons/shape.svg";
import allResArrows from "../../site-assets/Icons/all-restaurants-arrows.svg";

import { RootState } from "../../store/types";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import CardComponent from "../../components/card/card-component";
import { Link } from "react-router-dom";
import {
  fetchAllRestaurants,
  fetchPopRestaurants,
} from "../../middleware/middleware";
import { IRestaurant } from "../../models/restaurant.model";

const HomePage = () => {
  const [popRestaurants, setPopRestaurants] = useState<IRestaurant[]>([]);
  const [restaurants, setRestaurants] = useState<IRestaurant[]>([]);
  // const restaurants = useSelector((state: RootState) => {
  //   return state.restaurants;
  // });
  const signatureDishes = useSelector((state: RootState) => {
    return state.signatureDishes;
  });
  const legendIcons = useSelector((state: RootState) => {
    return state.legend;
  });

  useEffect(() => {
    async function getPopRestaurants() {
      let popRestaurants = await fetchPopRestaurants();
      console.log(popRestaurants);
      setPopRestaurants(popRestaurants);
    }
    async function getRestaurants() {
      let restaurants = await fetchAllRestaurants();
      console.log(restaurants);
      setRestaurants(restaurants);
    }
    getPopRestaurants();
    getRestaurants();
  }, []);
  // useEffect(() => {
  //   const getPopRestaurants = async () => {
  //     const popRestaurants: IRestaurant[] = await fetchPopRestaurants();
  //     console.log(popRestaurants);
  //     setRestaurants(popRestaurants);
  //   };
  //   getPopRestaurants();
  // }, []);

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1670,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
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
    <div className="HomePage">
      <HeaderComponent />

      <div className="mobileNavBtns">
        <Link to="/chefs" className="chefBtn">
          <span className="chefBtnTxt">CHEFS</span>
        </Link>

        <Link to={"/restaurants"} className="restaurantBtn">
          <span className="restaurantBtnTxt">RESTAURANTS</span>
        </Link>
      </div>

      <div className="popRestaurantsCon">
        <div className="restaurantsTitle">
          THE POPULAR RESTAURANTS IN EPICURE :
        </div>

        <div className="CardsContainer">
          <Slider {...carouselSettings}>
            {popRestaurants.map((restaurant, i) => {
              return (
                <CardComponent
                  key={i}
                  cardType="restaurants"
                  img={restaurant.image}
                  resName={restaurant.name}
                  chef={restaurant.chef.name}
                />
              );
            })}
          </Slider>
        </div>
        <a className="allRestaurants">
          All Restaurants <img src={allResArrows} alt="" />{" "}
        </a>
      </div>

      <div className="signatureDishesCon">
        <div className="dishesTitle">SIGNATURE DISH OF :</div>
        <div className="CardsContainer">
          <Slider {...carouselSettings}>
            {restaurants.map((restaurant, i) => {
              return (
                <CardComponent
                  key={i}
                  cardType="dishes"
                  img={restaurant.signatureDish.img}
                  resName={restaurant.name}
                  description={restaurant.signatureDish.ingredients}
                  dishName={restaurant.signatureDish.name}
                  price={restaurant.signatureDish.price}
                  spicy={restaurant.signatureDish.spicy}
                  vegetarian={restaurant.signatureDish.vegetarian}
                  vegan={restaurant.signatureDish.vegan}
                  legendIcons={legendIcons}
                />
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="legend">
        <div className="legendTitle">THE MEANING OF OUR ICONS :</div>
        <span className="legendCon">
          {legendIcons.map((icon, i) => {
            return (
              <div key={i} className="icon">
                <img className={icon.iconName} alt="" src={icon.img} />
                <div className="legendText">{icon.iconName}</div>
              </div>
            );
          })}
        </span>
      </div>
      <div className="chefOfTheWeek">CHEF OF THE WEEK :</div>
      <CotwComponent />

      <div className="aboutUs">
        <div className="AUContent">
          <div className="AUDescription">
            <div className="AUTitle">ABOUT US :</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non <br /> eu ipsum. Cras porta
            malesuada eros, eget blandit <br /> turpis suscipit at. Vestibulum
            sed massa in magna sodales porta. Vivamus elit urna, <br />{" "}
            dignissim a vestibulum.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum no <br /> eu ipsum. Cras porta
            malesuada eros.
          </div>
          <div className="AULogo">
            <img className="AUImg" src={siteLogo} alt="" />
          </div>
        </div>
        <div className="appDownloadBtnsCon">
          <div className="appDownloadBtns">
            <button className="IOS">
              <img alt="" src={AppleIcon} className="appleStoreIcon"></img>
              <div className="buttonText">
                Download on the <div className="whereTodownload">App Store</div>
              </div>
            </button>
            <button className="android">
              <img alt="" src={googlePlayIcon} className="googlePlayIcon"></img>
              <div className="buttonText">
                Get it on <div className="whereTodownload">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="legal">
        <a className="contact">Contact Us</a>
        <a className="terms">Term of Use</a>
        <a className="Privacy">Privacy Policy</a>
      </div>
    </div>
  );
};

export default HomePage;
