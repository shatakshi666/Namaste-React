import { CDN_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurentMenuDisplay = (props) => {

    const { resMenudata } = props;
    const { name, description, imageId} = resMenudata;

    const status = useOnlineStatus();

    if (status === false) return <h1>Seems like you are offline!!</h1>
    return ( <>
    <div className ="">
        <div className="justify-between flex">
        <div className="w-8/12 p-4">
        
            <center><h2 className="text-left font-semibold m-2 p-2">{name}</h2></center>

            <p className="m-2 p-2">{description}</p> 
        
        {/* </center> */}
        </div>
        <div className="w-4/12 p-4 flex ">
        <img className="w-full h-40 object-cover rounded-md " src={CDN_URL + imageId} >
        </img>
        <button className="bg-black text-white p-2 m-2 absolute mx-12 rounded-md my-40">Add +</button>
        </div>
       
        </div>

        </div>
        <hr className="border-bottom-1 bg-slate-100 m-2 p-2"/>
        </>
    )
}
export default RestaurentMenuDisplay;