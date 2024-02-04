import React from "react";

class UserClass extends React.Component {
    constructor (props) {
        super(props);

        this.state={
            count : 0,
            count2 : 2,
        }
    }
    render () {

        const {name} = this.props;
        const {count,count2} = this.state;
        return (
            <div className="user-card">
                <h1>{name}</h1>
                <h1>Count : {count}</h1>
                <h1>Count2 : {count2}</h1>
                <h2>Ballon Type Pokemon</h2>
                <h3>Evolve into Wiggly Tuff !!!</h3>
            </div>
        )
    }
}

export default UserClass;