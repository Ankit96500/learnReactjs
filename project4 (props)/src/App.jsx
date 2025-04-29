// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

// use dev UI website

function App() {

  // let user = {
  //   usernaem:"mahi",age:34
  // }
  // let newArr = [3,3,3,]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb- 4' >TailWind Css</h1>
        < Card userName = "chai aur coffee" btnText = "BOY"/>
        < Card userName = "pizza donut" />
  
    </>
  )
}

export default App
