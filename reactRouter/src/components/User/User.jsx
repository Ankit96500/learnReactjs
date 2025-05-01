import {useParams} from "react-router";

// hold value from the url
export default function User(){

    const {refId} = useParams();
    return(
        <>
        <div className="text-black text-center text-3xl bg-green-700 shadow-md">
            user:{refId}
        </div>
            
        </>
    );
}