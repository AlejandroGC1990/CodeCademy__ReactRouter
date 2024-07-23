import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";

import { Route } from 'react-router-dom';

import "./App.css";

const router = 
  /* Wrap this Root Route to create Router here */
  <Route path="/" element={ <Root/> }>
    {/* Add Routes here! */}
  </Route>

function App() {
  return (
    <>
      { /* Replace below and add Router Provider*/}
      <p>REPLACE ME WITH A ROUTER PROVIDER</p>
    </>
  );
}

export default App;
