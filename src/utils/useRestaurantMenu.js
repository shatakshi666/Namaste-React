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


        const cardsArray =
            json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        const menuCard = cardsArray?.splice(2, 13);
        const resName = json?.data?.cards?.[0]?.card?.card?.info.name;
        


        setResInfo(menuCard);
        setTitle(resName);
    }

    return [resInfo, title];
}

export default useRestaurantMenu;