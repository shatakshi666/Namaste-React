import { useState } from "react";
import RestaurentMenuDisplay from "./RestaurentMenuDisplay";
const RestaurentCategory = ({data, restaurentCardData, showItems, setShowIndex}) => {
const [collapse , setCollapse] = useState(false);
const handleClick = () => {
    console.log("Clicked");
       setShowIndex();
       setCollapse(!collapse);      
    }
    return (
        <>
            {/* Header of accordian*/}
        <div>
            <div className = "w-6/12 mx-auto my-4 justify-between bg-gray-50 shadow-lg p-6"> 
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span className="font-medium justify-between">^</span>
            </div>
            <div>
                {restaurentCardData.map( (res) => { 
                return (
                    (showItems && collapse) ? <RestaurentMenuDisplay resMenudata={res?.card?.info}
                    key={res?.card?.info?.id}
                    
                    /> : null
                )
        }) }
        
        </div>
            </div>
            
            </div>
        {/* Body of accordian */}
        

        </>
    )
}

export default RestaurentCategory;