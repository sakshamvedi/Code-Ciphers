import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './Styles/Global.scss';
import Header from './Components/Header';
import Login from './Components/Login';
import AfterLogin from './Components/AfterLogin';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sheet from './Components/Sheet';
import PublicStreaks from './Components/PublicStreaks';



function App() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    userLoggedin();
  }, [])

  const userLoggedin = () => {
    if (localStorage.getItem("streaksmailz6527") != null)
      setuser(localStorage.getItem("streaksmailz6527"));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header />{
          user != null ? <AfterLogin /> : <Login />
        }</>}></Route>
        <Route path="/striversheet" element={<><Header /><Sheet /></>}></Route>
        <Route path="/publicstreaks" element={<><Header /><PublicStreaks /></>}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
