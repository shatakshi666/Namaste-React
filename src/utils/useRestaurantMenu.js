import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
    const [resInfo, setResInfo] = useState([]);
    const [title, setTitle] = useState("");
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + restaurantId
        );
        const json = await data.json();
        console.log(json);
        const menuCardCategory =
            json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


        // const menuCard = cardsArray?.splice(2, 13);

        console.log(menuCardCategory, "menucard");
        // console.log(cardsArray,);
        const resName = json?.data?.cards?.[2]?.card?.card?.info.name;

        setResInfo(menuCardCategory);
        setTitle(resName);
    }

    return [resInfo, title];
}

export default useRestaurantMenu;