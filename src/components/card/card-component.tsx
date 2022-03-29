import "./card-component.scss";

const CardComponent = (props: any) => {
  return (
    <>
      {props.cardType === "restaurants" && (
        <div className="PopResCard">
          <div className="cardImgCon">
            <img className="cardImg" alt="" src={props.img} />
          </div>
          <div className="restaurantsCardText">
            <div className="resName">{props.resName}</div>
            <div className="resChef">{props.chef}</div>
          </div>
        </div>
      )}

      {props.cardType === "dishes" && (
        <div className="dishesCard">
          <div className="cardHead">{props.resName}</div>
          <div className="cardImgCon">
            <img className="cardImg" alt="" src={props.img} />
          </div>
          <div className="dishesCardText">
            <div className="dishName">{props.dishName}</div>
            <div className="dishDescription">{props.description}</div>
            {props.spicy && (
              <div className="legendIconCon">
                <img
                  className="legendIconImg"
                  src={props.legendIcons[0].img}
                  alt=""
                />
              </div>
            )}
            {props.vegetarian && (
              <div className="legendIconCon">
                <img
                  className="legendIconImg"
                  src={props.legendIcons[1].img}
                  alt=""
                />
              </div>
            )}
            {props.vegan && (
              <div className="legendIconCon">
                <img
                  className="legendIconImg"
                  src={props.legendIcons[2].img}
                  alt=""
                />
              </div>
            )}
          </div>
          <span className="dishPrice">₪{props.price}</span>
        </div>
      )}

      {props.cardType === "chefs" && (
        <div className="chefCard">
          <div className="chefCardImg">
            <img alt="" src={props.img} />
          </div>
          <div className="chefsCardText">
            <div className="yossisRes">{props.resName}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardComponent;
