import React, { useState, useEffect } from 'react'
import '../Styles/PublicStreaks.scss';
import { getAllData } from '../Database';

function PublicStreaks() {
    const [info, setInfo] = useState([]);
    const [solve, setsolve] = useState(0);
    const [unsolve, setunsolve] = useState(0);

    useEffect(() => {

        try {
            async function getData() {
                if (localStorage.getItem("streaksuserz6527") != null) {
                    const data = await getAllData();
                    if (data.length > 0) {
                        setInfo(data);
                        if (data.solved != null) {
                            setsolve(data.solved.length);
                            setunsolve(data.unsolved.length);
                        }
                        console.log(data);
                    }
                    else {

                        console.log("eror")
                    }

                }
                else {
                    console.log("error");
                }
            }


            getData();
        } catch (error) {
            console.log("error");
        }
    }, []);

    return (
        <>
            <div className="usercards">
                {
                    info.map((data) => {
                        return (
                            <>

                                <div className="card1">
                                    <div className="image" style={{ backgroundImage: `url(${data.displaypic})` }}></div>
                                    <div className="content">
                                        <div className="title">Striver SDE Sheet</div>
                                        <div className="author">{data.solved ? data.solved.length : 0}/{data.unsolved ? data.unsolved.length : 15} </div>
                                        <div className="sub-title">{data.displayname}</div>
                                    </div>
                                </div>

                            </>
                        )
                    })


                }
            </div >

        </>
    )
}

export default PublicStreaks;