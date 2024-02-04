import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div>
            <h1>
                This is a about us page.
            </h1>
            <User name = {"Pikachu"}/>
            <UserClass name = {"Togepi"}/>
        </div>
    )
}

export default About;