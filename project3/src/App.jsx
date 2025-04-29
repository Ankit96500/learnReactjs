import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  // let counter = 15;

  function addValue(){
    // interview questions
    if(counter<20){
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter( prevValue =>prevValue + 1)    
      setCounter( prevValue =>prevValue + 1)    
      setCounter( prevValue =>prevValue + 1)    
      setCounter( prevValue =>prevValue + 1)    
     
    }
  };
  
  function removeValue(){
    if (counter>0) {
      setCounter(counter - 1)    
    }
  };

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Button {counter}</button>
     <br /><br />
     <button onClick={removeValue}>Remove Button {counter}</button>

    </>
  )
}

export default App

/*
✅ 1. setCounter(counter + 1) (non-functional update)
This uses the current value of counter at the time the function runs.

Since React batches state updates in one render cycle, multiple setCounter(counter + 1) calls using the same value of counter will all be considered as the same update.

So all 4 of these calls are essentially doing: setCounter(16), which doesn't accumulate — the value stays the same.

✅ 2. setCounter(prev => prev + 1) (functional update)
This correctly uses the latest state.

React makes sure each of these uses the latest value after the previous update.

These 4 calls will result in:

prev = 16 → 17

prev = 17 → 18

prev = 18 → 19

prev = 19 → 20

So finally, your counter value will be 20 after pressing the button (starting from 15), even though you're calling setCounter 8 times — only the last 4 are effective.



*/