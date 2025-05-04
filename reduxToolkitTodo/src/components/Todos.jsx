import { useSelector,useDispatch } from 'react-redux'
import {deleteTodo} from '../features/todo/todoSlice'


export function Todos (){

    const todos = useSelector(state => state.todos);
    const dispatch =  useDispatch();

    return (
        <>
        {
            todos.map((todo)=>(      
                <li key = {todo.id}>
                   {todo.text}
                    <button
                    onClick={()=>dispatch(deleteTodo(todo.id))}
                    >Delete</button>
                </li>
            ))
        }
        </>
    )
};

