import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    console.log("children:",children);
    
    const [user,setUser] = React.useState(null);
    const [car,setNewcar] = React.useState('BMW');
return (
    <UserContext.Provider value={{user,setUser,car}}>
    {children}
    </UserContext.Provider>
)

};

export default UserContextProvider


