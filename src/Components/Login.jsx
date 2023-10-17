import React from 'react'
import '../Styles/Login.scss';
import streaks from '../Resources/str.png';
import { signInWithGoogle } from '../Firebase.js';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
function Login() {
    const [text] = useTypewriter({
        words: ['Streaks', 'Consistency', 'Compete', 'SDE Sheets'],
        loop: 10,
        delaySpeed: 1000,

        // onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <>

            <div className="parent">
                <div className="part1">
                    Are You  Ready for <span>{text}</span>   <Cursor cursorColor='rgb(101, 76, 244)' /> ?
                    <div className="btn">
                        <button onClick={signInWithGoogle} >Log In </button>
                    </div>

                </div>
                <div className="part2">

                    <img src={streaks} />
                </div>
            </div>
        </>
    )
}

export default Login