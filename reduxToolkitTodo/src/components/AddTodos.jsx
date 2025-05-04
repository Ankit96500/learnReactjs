import { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export function AddTodo(){
    const [input,setInput] = useState("");

    const dispatch = useDispatch();
    
    const addToHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };


    return(
        <>
        <form onSubmit={addToHandler}>
            <input 
            type="text" 
            placeholder="Enter a Todo... "
            onChange={(e)=>setInput(e.target.value)}
            value= {input}
            />
            <button type="submit">
                Add Todo
            </button>

        </form>
        </>
    )
};

