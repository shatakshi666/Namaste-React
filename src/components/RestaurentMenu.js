import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [resInfo, title] = useRestaurantMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(0);
    return (
      <div className="">
        <center>
          <h1 className=" text-3xl font-bold size p-4 m-4">{title}</h1>
        </center>

        {resInfo?.map((res, index) => (
          
            <RestaurentCategory
              data={res?.card?.card}
              restaurentCardData={res?.card?.card?.itemCards}
              key={index}
              showItems={index === showIndex ? true : false}
              setShowIndex = {() => setShowIndex(index)}
              // showI = {() => set}
            />
          )
        )}
      </div>
    );
};
export default RestaurantMenu;