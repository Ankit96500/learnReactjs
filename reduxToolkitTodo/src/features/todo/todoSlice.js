import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:nanoid(),text:"default msg"}]
};

// create slices or reducerss
export const todoSlice = createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        // it has property and function.
        addTodo:(state,action)=>{
            // it is mandatory to define function here 
            const todo = {
                id:nanoid(),text:action.payload
            }
            state.todos.push(todo);
        },

        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>(
                todo.id !== action.payload
            ));
        },

    }

});



// first export all functionality
export const {addTodo,deleteTodo} = todoSlice.actions

// export all reduecers
export default  todoSlice.reducer






