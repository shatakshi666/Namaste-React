import { CDN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurentMenuDisplay = (props) => {

    const { resMenudata } = props;
    const { name, description, imageId } = resMenudata;

    const status = useOnlineStatus();

    if (status === false) return <h1>Seems like you are offline!!</h1>
    return ( <>
        <div className="block  p-4 m-4 items-center  relative">
            <img className=" bg-green-300 p-2 m-2 w-36 h-auto object-cover justify-center border  rounded-lg" src={CDN_URL + imageId} >
            </img>
            <button className="my-24 pr-3 pl-3 bg-white absolute   m-10 mx-12 mb-14 border rounded-md border-black  justify-items-center p-1 top-5">Add</button>

            <center><h2 className="font-bold  ">{name}</h2></center>

            <h3 className="p-2 m-2">{description}</h3>



        </div>
        {/* </center> */}
        </>
    )
}
export default RestaurentMenuDisplay;