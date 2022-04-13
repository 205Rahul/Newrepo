import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import  {Home } from './Home';
import  {About}  from './About';
import "./App.css";
import { Dashboard } from './components/Dashboard';

export const App = () => {
  return (
   
    <div>
      <Dashboard/>
      
    </div>
  )
}
