import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurentMenuDisplay from "./RestaurentMenuDisplay";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [title, setTitle] = useState("");

  const {restaurantId} = useParams();
  // console.log(params);
  // restaurantId: "123"
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + restaurantId
    );

    const json = await data.json();

    
    const cardsArray =
      json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuCard = cardsArray?.splice(2, 13);
    const resName = json?.data?.cards?.[0]?.card?.card?.info.name;
    console.log(menuCard);

    // console.log(wantedArray);
    setResInfo(menuCard);
    setTitle(resName);
  };

  if (resInfo === null) {
  } else {
    return (
      <div>
        <center>
            <h1>{title}</h1>
        </center>
        {/* {resInfo.map((res) =>
          (res?.card?.card?.itemCards).map((item) => (
            <RestaurentMenuDisplay
              resMenudata={item?.card?.info}
              key={item?.card?.info?.id}
            />
          ))
        )} */}
        {resInfo.map((res) => {
          return res?.card?.card?.itemCards?.map((item, index) => {
            const position = index + 1;
            return (
              <RestaurentMenuDisplay
                resMenudata={item?.card?.info}
                key={item?.card?.info?.id}
                myIndex={position}
                title = {title}
              />
            );
          });
        })}
      </div>
    );
  }
};

export default RestaurantMenu;
