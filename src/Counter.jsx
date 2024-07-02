import React, { useEffect } from "react";
import { useState } from "react";

// let count = 0;
export default function Counter(){
    function increment(){
        // count++;
        setCount(++count)
        console.log(count)
    }

    // const arr = useState(0);
    // console.log(arr);

    // let [stateVar, setStateVar] = useState(0);
    let [count, setCount] = useState(0);
    return(
        <>
        {/* <button onClick={increment}>Count is {count}</button> */}
            <div className="count">
                <p>Count is {count}</p>
                <button onClick={increment}>Increament</button>
            </div>
        </>
    );
}















