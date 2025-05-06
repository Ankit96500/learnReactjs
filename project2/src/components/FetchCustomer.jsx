import { useCallback, useEffect, useRef, useState } from "react";

export default function FetchCustomerApi() {
    const [customers, setCustomers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const observer = useRef();
    console.log('component Re-Render');
    
    
    const fetchApi = async (page) => {
        // set loading value true uuntil fetch process complete.
        setLoading(true);

        // limits
        const limit = 10;
        // skips
        const skip = (page - 1) * limit;
        const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
        const fetchData = await response.json();
        const data = fetchData.users;
        
        setCustomers((prev) => [...prev, ...data]);
        setHasMore(data.length > 0);
        
        // set to false
        setLoading(false);
    };

    
    useEffect(() => {
        fetchApi(page);
    }, [page]);

    const lastCustomerRef = useCallback(
        (node) => {            
            if (loading) return;

            if (observer.current){
                // if current has a intersectionObserver() instance
                console.log("True..........");
                
                observer.current.disconnect();
            } else{
                console.log("initial false...");
            }
                
            observer.current = new IntersectionObserver((entries) => {
                
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPage) => prevPage + 1);
                }
            });

            // watching the lsat current node <li></li>
            if (node) observer.current.observe(node);
        },
        [loading, hasMore]  
    );

    useEffect(() => {
        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, []);

    console.log("customer:",customers);
    

    return (
        <div style={{maxHeight:'15vh', overflowY:"auto", border:"solid",borderStyle:"double"}}>
            <ul style={{listStyleType:'none',padding:"0", margin:"5px"}}>

                {customers.map((customer, index) => {
                    if (index === customers.length - 1) {
                        return (
                            // this will call when last index equals to last customer index
                            <li ref={lastCustomerRef} key={customer.id}>
                            {customer.firstName} {customer.lastName}
                            </li>
                        );
                    }
                    return (
                        <li key={customer.id}>
                            {index + 1 } {customer.firstName} {customer.lastName}
                        </li> 
                    )
                    })}
            </ul>
            {loading && <p>Loading...</p>}
        </div>
    );
}


/*  intersection Observer method:

| Method               | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| `observe(element)`   | Starts watching an element                                               |
| `unobserve(element)` | Stops watching an element                                                |
| `disconnect()`       | Stops all observation                                                    |
| `takeRecords()`      | Returns a list of intersection changes not yet delivered to the callback |

 */



/*
useRef() = useRef() provide the presistent,mutable object:
    - does'nt trigger re-render when update
    - is commaonly used to acces the DOM node and store the mutable object value

useCallback() =  it basicaly return the memorized version callback function.
    - react re-render whenever the state/props change.
    - if lastCustomerRef was just a regular inline function. new function created on every render.
    - using callback, you ensure (lastCustomerRef) only re-render if any change detect in [loading,hasmore] 
 
*/


/*

how pagination work in express

users = [(245) users in this array]   // fecth data from this users array
function getPaginatedData(limit, page){
    const limit = limit || 10
    const page = page || 1

    // number of skips
    const skips = (page - 1) * limit

    // total number of data
    const totalNumber = users.length;    

    // user data
    const userData = users.slice(skips,limits + 1);
    
    // total number of page
    const totalPage =  Math.floor(totalNumber / limits) // 25
    
    return res.json({
    totalPage:totalPage,
    userData:userData,
    limit:limir,currentPage:page
    })


}

 */



