import { useContext } from "react";
import UserContext from "../Context/UserContext";



export default function Profile () {

    const {user,car} = useContext(UserContext);


    if (!user) return <div> Please Login {car}</div>
    console.log("user:>",user);
    
    return( 
    <div> Welcome: {user.username} </div>
    );
};





