import {useState} from 'react';

const User = ({name}) => {
    const [count , setCount] = useState(0);
    return (
        <div className="user-card">
            <h1>{name}</h1>
            <h1>Count : {count}</h1>
            <h2>Ballon Type Pokemon</h2>
            <h3>Evolve into Wiggly Tuff !!!</h3>
        </div>
    )
}

export default User;