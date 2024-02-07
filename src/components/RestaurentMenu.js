
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurentMenuDisplay from "./RestaurentMenuDisplay";
const RestaurantMenu = () => {



  const { restaurantId } = useParams();
  const [resInfo, title] = useRestaurantMenu(restaurantId);



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
