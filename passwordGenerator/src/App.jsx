

import { useCallback, useEffect, useState ,useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(4);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  // it optimize if anything change
  const passwordGenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str +="0123456789";
      if(charAllowed) str += "/*?!/][$&@";
      for(let i =1 ;i <= length ; i++){
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char)
      }
    
      setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);
  
  // use refhook
  const passwordRef = useRef(null)
  
  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password]);
  
    // if anything change in array it runs
    useEffect(()=>{
      passwordGenerator();
    },[length,numberAllowed,charAllowed,passwordGenerator]);
  
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
        
        <h1 className="text-2xl font-bold text-center text-gray-800">
           Password Generator
        </h1>
  
        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
            placeholder="Your generated password"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700"
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Copy
          </button>
        </div>
  
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-medium">Length: {length}</label>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-2/3 accent-blue-600"
          />
        </div>
  
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="accent-blue-600"
          />
          <label htmlFor="numberInput" className="text-gray-700">
            Include Numbers
          </label>
        </div>
  
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="accent-blue-600"
          />
          <label htmlFor="charInput" className="text-gray-700">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  </>
  )
};

export default App
