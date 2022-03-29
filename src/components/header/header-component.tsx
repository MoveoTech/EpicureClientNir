import "./header-component.scss";
import React, { useEffect, useState } from "react";

import { CSSTransition } from "react-transition-group";

import SearchComponent from "../search/search-component";
import siteLogo from "../../site-assets/site-logo/logo@2x.jpg";
import userIcon from "../../site-assets/Icons/user-icon.svg";
import bagIcon from "../../site-assets/Icons/bag-icon.svg";
import useWindowSize from "../../utils/useWindowSize.ts";
import searchIcon from "../../site-assets/Icons//search-icon.svg";
import hamburgerIcon from "../../site-assets/Icons/group-13.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const { width } = useWindowSize();
  const [showSearchBox, setSearchBox] = useState(false);
  const [showHero, setHero] = useState(false);

  useEffect(() => {
    setHero(true);
    return () => {};
  }, []);

  setTimeout(() => {
    setSearchBox(true);
  }, 800);

  return (
    <>
      {/* {width > 1200 && ( */}
      <div className="navBar desktop">
        <div className="navSection">
          <Link to="/">
            <img className="logo" src={siteLogo} alt="" />
          </Link>

          <span className="EPICURE">EPICURE</span>
          <Link to="/restaurants" className="Restaurants">
            Restaurants
          </Link>
          <Link to="/chefs" className="Chefs">
            Chefs
          </Link>
        </div>
        <div className="searchSection">
          <SearchComponent searchType="navbar" />
          <span className="icons">
            <img alt="" src={userIcon} className="User-icon"></img>
            <img alt="" src={bagIcon} className="Bag-icon"></img>
          </span>
        </div>
      </div>
      {/* )} */}

      {/* {width < 1200 && ( */}
      <div className="navBar mobile">
        <div className="navSection">
          <img className="hamburgerIcon" src={hamburgerIcon} alt="" />
        </div>
        <div className="logoMobileCon">
          <Link to="/">
            <img className="logo" src={siteLogo} alt="" />
          </Link>
        </div>
        <div className="searchSection">
          <span className="iconsMobile">
            <img alt="" src={searchIcon} className="Search-icon"></img>
            <img alt="" src={userIcon} className="User-icon"></img>
            <img alt="" src={bagIcon} className="Bag-icon"></img>
          </span>
        </div>
      </div>
      {/* )} */}

      <CSSTransition
        in={showHero}
        timeout={500}
        classNames="heroBox"
        unmountOnExit
      >
        <div className="heroCon">
          <CSSTransition
            in={showSearchBox}
            timeout={1000}
            classNames="heroSearchBox"
            unmountOnExit
          >
            <div className="Rectangle">
              <span className="heroSearchTitle">
                Epicure works with the top chef restaurants in Tel Aviv
              </span>
              <SearchComponent searchType="hero" />
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </>
  );
};

export default HeaderComponent;
