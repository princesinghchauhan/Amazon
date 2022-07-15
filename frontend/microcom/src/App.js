import React from "react";
import { Routes, Route} from "react-router-dom"
import Navbar from "./Navbar";
import { Shop } from "./shop/shop";

function App() {
  return (
    <div>
    {/* <Home/> */}
    <Routes>
<Route path="/" element={< Navbar/>}/>
<Route path="/shop" element={< Shop/>}/>
    </Routes>
    </div>
  );
}

export default App;
