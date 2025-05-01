// import { useEffect, useState } from "react";

// use hook
import { useLoaderData } from "react-router";



export default function GithubFetchData(){
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/Ankit96500`)
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res));
    // },[]);
    const data = useLoaderData()
    

    return(
        <>
            <div className=" text-white text-3xl bg-blue-500 py-3 px-4">
                Github Followers: {data.followers}
            </div>
            <div className="bg-gray-300 m-4">
            <img src={data.avatar_url} alt={data.name} height="400" width="300" />
            </div>
        </>
    );
};



export const GithubInfoLoader = async() =>{
    const response = await fetch(`https://api.github.com/users/Ankit96500`)
    return await response.json()
};

