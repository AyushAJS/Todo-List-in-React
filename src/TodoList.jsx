import { Input } from "postcss";
import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";

export default function TodoList(){

    // const [todo,setTodo] = useState(["Sample Tasks"]);
    const [todo,setTodo] = useState([{task: "Sample task", id: uuidv4(), isDone: false}]);
    const [input,setInput] = useState("");
 
    let addNewTask = ()=>{
        // setTodo([...todo,input]);
        // setTodo([...todo,{task: input, id: uuidv4()}]);
        setTodo((preTodo)=>{
            // if(input != ""){
            // return [...preTodo,{task: input, id: uuidv4()}]};
            //     return (alert("give some task"));
            return [...preTodo,{task: input, id: uuidv4(), isDone: false}];
        })
        setInput("");
    }
    let deleteTask = (id)=>{
        setTodo((preTodo)=>todo.filter((preTodo)=>preTodo.id != id));
    }
    let upperCaseAll = ()=>{
        setTodo((preTodo)=>(preTodo.map((todo)=>{
            return {
                ...todo,
                task: todo.task.toUpperCase()}
        })))
    }
    let upperCaseOne = (id)=>{
        setTodo((todo)=>(todo.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo, 
                    task: todo.task.toUpperCase()}
            }
            else{
                return todo;
            }
        })
    ))}
    let updateTodoValue = (event)=>{
        setInput(event.target.value);
    }
    let doneTask = (id)=>{
        setTodo((preTodo)=>(preTodo.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo, 
                    isDone: true}
            }
            else{
                return todo;
            }
        })
    ))
    }
    let doneAllTask = ()=>{
        setTodo((preTodo)=>(preTodo.map((todo)=>{
            return {
                ...todo,
                isDone: true}
        })))
    }



    return(
        <>
            <div className="container"> 
                {/*if we donot write input. Then input field will not be controlled by the 'input' state variable. This means that the input field's value will not be updated automatically when the user types something. */}
                <input value={input} placeholder="add task" onChange={updateTodoValue} />
                <br />
                <button onClick={addNewTask} style={{backgroundColor: "green", marginTop: '7px'}}>Add task</button>
                <br /><br />
                <hr />
                <h4>List Tasks</h4> 
                <ul>
                    {
                        todo.map((todo)=>(
                            <li key={todo.id}>
                                <span style={todo.isDone ?  {textDecoration: 'line-through'} : {}}>{todo.task}</span>

                                <button onClick={()=>deleteTask(todo.id)}>delete task</button>  

                                <button onClick={()=>upperCaseOne(todo.id)}>Upper-Case</button>  

                                <button onClick={()=>doneTask(todo.id)}>Mark as done</button>
                            </li>
                        ))
                    }
                </ul>
                <br />
                <div className="footer-btn">
                <button onClick={upperCaseAll}>Upper-Case All</button>
                <button onClick={doneAllTask}>Mark done All</button></div>
            </div>
        </>
    )

}
































