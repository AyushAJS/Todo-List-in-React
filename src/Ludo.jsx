import React from "react";
import { useState } from "react";

export default function Ludo(){
    let [moves,setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    let [arr,setArr] =   useState(["no Moves"]);

    function updateBlue(){
        setMoves((preMove)=>{
            return ({...preMove,blue:preMove.blue+1})
        });
    }
    function updateYellow(){
        // setMoves((preMove)=>{
        //     return ({...preMove,yellow:preMove.yellow+1});
        // });

        setArr((preArr)=>{
            return([...preArr,"yellow Move"])
        });
        console.log(arr)
    }
    function updateGreen(){
        setMoves((preMove)=>{
            return ({...preMove,green:preMove.green+1});
        });
    }
    function updateRed(){
        setMoves((preMove)=>{
            return ({...preMove,red:preMove.red+1});
        });
    }

return(
    <>
    <h3>Game begin's</h3>
    <p>{arr}</p>
    <div className="board">
        <p>Yellow Moves {moves.yellow}</p>
        <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
        <p>Green Moves {moves.green}</p>
        <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
        <p>Blue Moves {moves.blue}</p>
        <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
        <p>Red Moves {moves.red}</p>
        <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
    </div>
    </>
)














}


























