import React, { useEffect, useState } from 'react'
import '../Styles/Sheet.scss';
import { addData, getAllData, getDataByDocId, updateData } from '../Database.js';

const Bucket = ["Step 1: Learn the basics", "Step 2: Learn Important Sorting Techniques", "Step 3: Solve Problems on Arrays [Easy -> Medium -> Hard]", "Step 4: Binary Search [1D, 2D Arrays, Search Space]", "Step 5: Strings [Basic and Medium]", "Step 6: Learn LinkedList [Single LL, Double LL, Medium, Hard Problems]", "Step 7: Recursion [PatternWise]", "Step 8: Bit Manipulation [Concepts & Problems]", "Step 9: Stack and Queues [Learning, Pre-In-Post-fix, Monotonic Stack, Implementation]", "Step 10: Sliding Window & Two Pointer Combined Problems", "Step 11: Heaps [Learning, Medium, Hard Problems]", "Step 12: Greedy Algorithms [Easy, Medium/Hard]", "Step 13: Binary Trees [Traversals, Medium and Hard Problems]", "Step 14: Binary Search Trees [Concept and Problems]", "Step 15: Graphs [Concepts & Problems]", "Step 16: Dynamic Programming [Patterns and Problems]", "Step 17: Tries"]
function Sheet() {

    const [fillBucket, setfillBucket] = useState([]);
    const [currentBucket, setcurrentBucket] = useState(Bucket);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        try {
            async function getData() {
                const data = await getDataByDocId(localStorage.getItem("streaksmailz6527"));
                if (data.solved != null) {
                    setLoading(false);
                    setfillBucket(data.solved);
                    setcurrentBucket(data.unsolved);
                    console.log(data);
                }
                else {
                    setLoading(false);
                }
                console.log(data);
            }

            getData();
        } catch (error) {
            console.log(error);
        }



    }, []);

    function completeQuestion() {
        try {
            const updatedBucket = [...currentBucket];
            const data = updatedBucket.shift();
            console.log(data);
            setcurrentBucket(updatedBucket);
            if (fillBucket.length === 0) {
                setfillBucket([data]);
                return;
            }
            const userData = {
                solved: fillBucket,
                unsolved: currentBucket,
            }
            updateData(localStorage.getItem("streaksmailz6527"), userData);
            console.log(fillBucket);
            setfillBucket([data, ...fillBucket]);

        } catch (error) {
            console.log(error);
        }



    }

    return (
        <>

            {loading ? <div className="loader"></div> : <>
                <div className="meterbox">
                    <meter className="meter" value={fillBucket.length} min="0" max={Bucket.length}></meter>
                    <p className="meter-text">{fillBucket.length}/{Bucket.length}</p>
                </div>
                <div className="container">


                    <div className="bucket">  {
                        currentBucket.map((item, index) => {
                            return (
                                <div className="data-table" key={index}>

                                    <p className='question'>{item}</p>
                                    <a className='link' href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" target='_blank'>Start</a>
                                    <button className='btn' onClick={completeQuestion}>Done ✅</button>
                                </div>
                            )
                        })
                    }</div>
                    <div className="line"></div>
                    <div className="fillbucket">
                        {
                            fillBucket.map((item, index) => {
                                return (
                                    <div className="data-table" key={index}>

                                        <p className='question'>{item}</p>
                                        <button className='btn'>Completed </button>
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>
            </>
            }
        </>

    )
}

export default Sheet