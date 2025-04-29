import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList"



function App() {
 
  return (
    <>
      <Navbar /> {/* Top Bar */}
      <ProductList /> {/* Products Section */}
      <Footer /> {/* Bottom Section */}
    </>
  )
}

export default App
