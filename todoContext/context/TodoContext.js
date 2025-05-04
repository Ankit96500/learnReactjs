import  { createContext, useContext } from "react";

// create context
export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    addTodo:(todo) =>{},
    updateTodo:(id,todo) =>{},
    deleteTodo:(id) => {},
    toggleComplete :(id) =>{}
});


// create provider
export const TodoProvider = TodoContext.Provider;


// custom Hook:
export const useTodo = () => {
    return useContext(TodoContext);
};

















