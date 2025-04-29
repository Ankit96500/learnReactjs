
import { ListGroup } from "./components/ListGroup"
import ReadyChai from "./chai"

export default function App() {
  const username = "danny the user";
  // {username}   <-- this is evaluated expression means, final output.
  return (
    //this is fragments
    <>  
      {/* <ListGroup />       */}
        < ReadyChai/>
        <h1>h1 tag {username}</h1>
    </>
  )
}

