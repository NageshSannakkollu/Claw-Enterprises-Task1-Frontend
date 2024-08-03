
import "./index.css"
const TodoItem = props => {
    const {eachTodoDetails} = props 
    const {id,userId,description,status} = eachTodoDetails
    return (
        <li className="todo-list-item">
            <p className="list-item">{id}</p>
            <p className="list-item">{userId}</p>
            <p className="list-item description">{description}</p>
            <p className="list-item status">{status}</p>
        </li>
    )
}
export default TodoItem