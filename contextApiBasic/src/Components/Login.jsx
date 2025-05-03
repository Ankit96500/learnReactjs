import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";


export default function Login () {
    const [username,setUsername] = useState('');
    const [Password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handelSubmit = (e) =>{
        e.preventDefault();
        setUser({username,Password})
    
    };
    return(
        <>
            <div>
                <h2>Login</h2>
                <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />{" "}
                <input 
                type="password" 
                placeholder="Password"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button onClick={handelSubmit} >Submit</button>
            </div>
        </>
    );
};





