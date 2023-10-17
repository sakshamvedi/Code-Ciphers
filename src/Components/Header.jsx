import React, { useEffect, useState } from 'react'
import '../Styles/Header.scss';
import { signInWithGoogle } from '../Firebase.js';
import { Link } from 'react-router-dom';
import { addData, updateData } from '../Database';
function Header() {
    const [show, setshow] = useState("");
    const [user, setuser] = useState(null);
    const [name, setname] = useState(null);
    const [login, setlogin] = useState(false);
    useEffect(() => {
        userLoggedin();
    }, [])



    const userLoggedin = () => {
        if (localStorage.getItem("streaksuserz6527") != null) {
            setuser(localStorage.getItem("streaksmailz6527"));
            setname(localStorage.getItem("streaksnamez6527"));
            setlogin(true);
            const userData = {
                displaypic: localStorage.getItem("streaksuserz6527"),
                displayname: localStorage.getItem("streaksnamez6527"),
            }
            updateData(localStorage.getItem("streaksmailz6527"), userData);
            console.log(user);
        }
        else {
            setlogin(false);

        }


    }



    const expandMenu = () => {
        if (show === "active") {
            setshow("");
        }
        else {
            setshow("active");
        }
    }
    return (
        <>
            <div className={`main-container ${show}`}>
                <div className={`nav-box ${show}`}>
                    <Link to="/"><button className='active'>Home</button></Link>
                    {
                        login ? <>  <Link to="/publicstreaks"><button>Streaks</button></Link>
                            <Link to="/striversheet"><button>Your Streaks</button></Link></> : <></>
                    }

                </div>
                <div className="logo">
                    <div>Code Ciphers</div>
                </div>

                <div className={`auth ${show}`} >
                    {
                        user != null ? <div className="user"> Hey {name} 👋 </div> :
                            <div class="google-btn" onClick={signInWithGoogle}>
                                <div class="google-icon-wrapper">
                                    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                                </div>
                                <p class="btn">Sign in with google</p>
                            </div>
                    }
                </div>


                <div className="toggle" onClick={expandMenu}>
                    <button>Menu</button>
                </div>

            </div >


        </>
    )
}

export default Header;