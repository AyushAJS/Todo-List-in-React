import React from "react";
import { useState } from "react";

let clickedImg = <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/ffffff/filled-like.png" alt="filled-like"/>;
let unClickedImg = <img width="24" height="24" src="https://img.icons8.com/material-outlined/48/ffffff/filled-like.png" alt="filled-like"/>;


export default function Like(){
    function fun(){
        console.log("fun is executed")
        return Math.random();
    }

    let [isLiked,setIsLiked] = useState(false);
    // let [count,setCount] = useState(0);
    // let [count,setCount] = useState(fun());
    let [count,setCount] = useState(fun);
    // function handleLike(){
    //     // setIsLiked(!isLiked);
    // }
    console.log(count);
    function handleCount(){
        console.log("component is rendered")
        // setCount(count+1);
        // setCount(count+1);

        setCount((currCount)=>{
            return currCount + 1;
        });
        // setCount((currCount)=>{
        //     return currCount + 1;
        // });
        // console.log(evt);
    }

    return(
        <>
            <div className="like">
                {/* <p onClick={handleLike}>{
                    isLiked ? (clickedImg): (unClickedImg)
                }</p> */}
                <p onClick={handleCount}>{
                    isLiked ? (clickedImg): (unClickedImg)
                }</p>
                <p>likes {count}</p>
            </div>
        </>
    )
}
















