import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userInfo : {
            login : "Dummy",
            
        }
    }
  }
  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/shatakshi666"
    );

    const json = await userData.json();

    this.setState(
        {
            userInfo : json
        }
    )
    console.log("Parent component did mount");
    
  }

  
  render() {
    console.log("Parent render called");
    const {login,location,avatar_url} = this.state.userInfo;

  
    return (
      <div>
        <h1>This is a about us page.</h1>
        <h2> Hi {login}</h2>
        <img src={avatar_url}/>
        <User name={login} />
        <UserClass name={location} />
        <UserClass name={"Second"} />
      </div>
    );
  }
}


export default About;
