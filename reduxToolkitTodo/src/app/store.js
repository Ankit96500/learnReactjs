
import {configureStore} from '@reduxjs/toolkit';
import  todoReducers from '../features/todo/todoSlice';


// create Store
export const store = configureStore({
    reducer:todoReducers
});







