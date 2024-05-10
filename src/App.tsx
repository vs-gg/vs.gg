import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "@pages/Landing/Landing";
import Login from "@pages/Login/Login";
import SignUp from "@pages/SignUp/SignUp";
import SearchVs from "@pages/SearchVs/SearchVs";
import { GlobalStyles } from "./styles/globals.style";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/search-vs"} element={<SearchVs />} />
      </Routes>
    </div>
  );
}

export default App;
