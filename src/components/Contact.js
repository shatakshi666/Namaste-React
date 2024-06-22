import { useContext } from "react";
import { ContextAPI } from "../utils/MockContext";
const Contact = () => {
    const {name, age} = useContext (ContextAPI);
    return(
        <div>
            <h1>
                Hi I am {name} and my age is {age}
            </h1>
        </div>
    )
}

export default Contact;