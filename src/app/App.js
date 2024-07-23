import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "../components/Root";
// import About from "../components/About";
// import SignUp from "../components/SignUp";
// import Articles from "../components/Articles";
// import Article from "../components/Article";
// import Categories from "../components/Categories";
// import Category from "../components/Category";
// import Author from "../components/Author";
// import Profile from "../components/Profile";
// import EditProfileForm from "../components/EditProfileForm";
import "./App.css";


const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={<Root />}>
    {/* Add Routes here! */}
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
