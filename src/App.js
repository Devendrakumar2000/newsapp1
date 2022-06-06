import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from "./pages/Contact";
import './style.css'
import ErrorPage from "./pages/ErrorPage";
export class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Routes>
         {/* when we use Routes than Route */}
      <Route path="/" element={<HomePage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
        {/* when we use Switch than Route */}
      {/* <Route exact path="/"><HomePage/></Route>
      <Route exact  path="/Contact"><Contact/></Route>
      <Route exact  path="/ErrorPage"><ErrorPage/></Route> */}
      </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
