import { useEffect, useState } from "react";
import "./App.css";
import { getBio, User } from "./github";
import { Activity, getActivity } from "./Activity";
import { getToken } from "./token";
import Navbar from "./components/Navbar.";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h1>Hi</h1>
      </div>
    </>
  );
}

export default App;
