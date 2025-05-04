import { Provider } from 'react-redux'
import './App.css'
import { AddTodo } from './components/addTodos'
import { Todos } from './components/todos'
import { store } from './app/store'


function App() {
  
  
  return (
    <Provider store={store}>
      <h1>Todo Application</h1>
      <AddTodo/>
      <Todos/>    
    </Provider>
  )
}

export default App
