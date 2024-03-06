import { useState } from "react";
import Button from "./Button";

export default function FeedbackCounter(){
    const [countGoodFeedback, setCountGoodFeedback] = useState(0)
    const [countNeutralFeedback, setCountNeutralFeedback] = useState(0)
    const [countBadFeedback, setCountBadFeedback] = useState(0)
    const total = countGoodFeedback + countNeutralFeedback + countBadFeedback
    return(
        <>
            <h1>Please leave feedback</h1>
            <ul style={{listStyle: "none", display: "flex", justifyContent: "center", flexDirection: "row"}}>
                <li><Button styles="button button-good button-good:hover" onClick={()=>setCountGoodFeedback((prev)=>prev+1)}>Good</Button></li>
                <li><Button styles="button button-neutral button-neutral:hover" onClick={()=>setCountNeutralFeedback(countNeutralFeedback+1)}>Neutral</Button></li>
                <li><Button styles="button button-bad button-bad:hover" onClick={()=>setCountBadFeedback(countBadFeedback+1)}>Bad</Button></li>
            </ul>

            <p>Good: {countGoodFeedback}</p>
            <p>Neutral: {countNeutralFeedback}</p>
            <p>Bad: {countBadFeedback}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {countGoodFeedback ? Math.trunc(countGoodFeedback/(total * 1.) * 100 % 101) : 0}% </p>
        </>
    )
}