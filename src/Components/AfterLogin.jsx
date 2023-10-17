import React from 'react'
import '../Styles/AfterLogin.scss';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { to } from 'react-router-dom';

function AfterLogin() {

    return (

        <>
            <div className="sheets">
                <div className="card1">
                    <div className="content">
                        <div className="title">SDE Sheet</div>
                        <div className="author">Striver - Raj Vikramaditya</div>
                        <div className="sub-title">455 Questions ,Array to Graph</div>
                        <div className="btn">
                            <Link to="/striversheet" className='button'>Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AfterLogin;