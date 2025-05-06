
import { ListGroup } from "./components/ListGroup"
import ReadyChai from "./chai"
import FetchCustomerApi from "./components/FetchCustomer";

export default function App() {
  const username = "danny the user";
  // {username}   <-- this is evaluated expression means, final output.
  return (
    //this is fragments
    <>  
    {/* infinite scroller */}
      <h1>Customer List</h1>
       <FetchCustomerApi/>

      {/* <ListGroup />       */}
        {/* < ReadyChai/> */}
        {/* <h1>h1 tag {username}</h1> */}
    </>
  )
}


