
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurentMenuDisplay from "./RestaurentMenuDisplay";
const RestaurantMenu = () => {

  const { restaurantId } = useParams();
  const [resInfo, title] = useRestaurantMenu(restaurantId);


  if (resInfo === null) {
  } else {
    return (
      <div className="">
        <center>
          <h1 className=" text-6xl font-bold size p-4 m-4">{title}</h1>
        </center>
        
        {resInfo.map((res) => {
          return res?.card?.card?.itemCards?.map((item, index) => {
            const position = index + 1;
            return (
              <RestaurentMenuDisplay
                resMenudata={item?.card?.info}
                key={item?.card?.info?.id}
                myIndex={position}
                title={title}
              />
            );
          });
        })}
      </div>
    );
  }
};

export default RestaurantMenu;
