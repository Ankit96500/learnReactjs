import { useState,useEffect } from "react"; 


function useCurrencyInfo(currency){
    const [data,setCurrencyData] = useState({});
    const [error,setError] = useState(false);

    useEffect(()=>{
        const callApi = async()=>{
            try {
                const fetchData = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const jsonData = await fetchData.json();
                setCurrencyData(jsonData[currency])
            } catch (error) {
                setError(error)
                console.log(error)
            }
        };
        callApi()
    },[currency]);
    return data
};


export default useCurrencyInfo;


