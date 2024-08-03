import TodoItem from "../TodoItem"
import Header from "../Header"
import "./index.css"

const TodosList = props => {
    const {todosDetails} = props
    console.log(todosDetails) 
    const todosHeader = () => (
        <div className="todos-header">
            <h4>ID</h4>
            <h4>USER_ID</h4>
            <h4>DESCRIPTION</h4>
            <h4>STATUS</h4>
        </div>
    )
    return (
        <div>
            <Header/>
            <hr/>
            <h2 className="todos-list-heading">Todos List:</h2>
            <hr/>
            {todosHeader()}
            <hr/>
            {todosDetails.map(eachTodo => (
                <TodoItem eachTodoDetails = {eachTodo} key={eachTodo.id}/>
            ))}
            <hr/>
        </div>
    )
}
export default TodosList