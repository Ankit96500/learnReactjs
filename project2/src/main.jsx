import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <>
//     <h1>custome app call function directyl</h1>
//     </>
//   );
// }


// how react see the element after complie
/*
const ReactElement = {
  type:"a",
  props:{
    href:"https://google.com",
    target:"_blank"
  },
  children : "click me to visit !"
}
*/

// const anotherElement = (
//   <a href='http://google.com' target='_blank'>visit the site</a>
// )

/**
 * in react it demand to accept only JSX, and that convert into a object or [reactElement] tree structure.
 * so, what if we directly send this to complie ,will react process it or not.
 * No, becous the props [key, vlaues] are not correct.
 * solution use: React.createElement();
 *  */ 

// const username = "global user"
// bable inject this in automatically.
// const reactElement = React.createElement('a',{
//   href:"http://google.com",target:"_blank"},
//   "clivk me to visit the site.",
//   username
// );


createRoot(document.getElementById('root')).render(
  // <MyApp/>
  // MyApp()
  
  //<ReactElement>   //  this does'nt work.
  
  // anotherElement    // now i'm sending the JSX, its working..
  
  // reactElement
  <App/>
  
)
