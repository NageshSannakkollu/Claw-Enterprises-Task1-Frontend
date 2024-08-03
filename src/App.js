import {useEffect,useState} from 'react'
// import Loader from 'react-loader-spinner'
import axios from 'axios'
import TodosList from "./components/TodosList"
import "./App.css"

const apiConstantsStatus = {
  initial:"INITIAL",
  inProgress:"IN_PROGRESS",
  failure:"FAILURE",
  success:"SUCCESS"
}

const App = () => {
  const [apiResponse,setApiResponse] = useState({
    status:apiConstantsStatus.initial,
    todos:null,
    errorMsg:null
  })

  useEffect(() => {
    setApiResponse({
      status:apiConstantsStatus.inProgress,
      todos:null,
      errorMsg:null
    })

    const getTodoItemsList = async () => {
      const response = await axios.get("http://localhost:3006/todos")
      setApiResponse({
        status:apiConstantsStatus.success,
        todos:response,
        errorMsg:null
      })
    }
    getTodoItemsList()
  },[])

  const renderSuccessView = () => {
    const {todos} = apiResponse 
    const formattedData =  todos.data.map(eachTodo => ({
      id:eachTodo.id,
      description:eachTodo.description,
      status:eachTodo.status,
      userId:eachTodo.user_id
    }))
    return(
    <div>
      <TodosList todosDetails={formattedData}/>
    </div>
    )
  }

  // const renderFailureView = () => (
  //   <div>
  //     <h3>Failure View</h3>
  //   </div>
  // )

  const renderLoadingView = () => (
    <div className='loader-container' data-testid="loader">
      <h3>Loading...</h3>
    </div>
  )

  const todosTableList = () => {
    const {status} = apiResponse;
    // console.log(status)
    switch(status){
      case apiConstantsStatus.success:
        return renderSuccessView()
      case apiConstantsStatus.inProgress:
        return renderLoadingView()
      default:
        return null;
    }
  }
  return(
    <div>
      {todosTableList()}
    </div>
  )
}

export default App 