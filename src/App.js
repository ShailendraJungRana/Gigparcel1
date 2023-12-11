import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, } from "react-router-dom";
import {Routes, Route} from 'react-router-dom'
import Footer from "./components/pages/Footer";


function App() {
  return (
    <>
  
    <Footer/>
    <Navbar/>
    {/* <Router> */}
      <Routes>  
        {/* <Route path='/' element={<Home/>}  /> </Route> */}

      </Routes>
   
      {/* </Router> */}
    </>
  );
}

export default App;