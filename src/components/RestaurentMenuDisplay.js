import { CDN_URL } from "../utils/constants";

const RestaurentMenuDisplay = (props) => {
    
    const {resMenudata, myIndex} = props;
    const {name, description, imageId} = resMenudata;
    
    
    return(
        <div>
            
            <h2>{name}</h2>
            <h2>{myIndex}</h2>
            <h3>{description}</h3>
            <img src = {CDN_URL + imageId} className="menu">
            </img>
            <hr/>
        </div>
    )
}
export default RestaurentMenuDisplay;