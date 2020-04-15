import React, {useReducer} from 'react';
import './App.css';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import {reducer} from "./reducers/reducers"
import initialState from "./reducers/reducers"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // const [objectiveList, setObjectiveList] = useState(objectives)
  // console.log("MY OBJECTIVES", objectives)

  //toggleItem id
  const toggleItem = clickedId => {
    console.log("This is my clickedID", clickedId)
    // const newObjectiveList = objectives.map(objective=> {
    //   if(objective.id === clickedId){
    //     return{
    //       ...objective,
    //       complete: !objective.complete
    //     }
    //   }else{
    //     return objective
    //   }
    // })
    // setObjectiveList(newObjectiveList)
    dispatch({type: "TOGGLE", payload: clickedId})
  }

  const addNew = objectiveText => {
    const newObjective = {
      name: objectiveText,
      complete: false,
      id: Date.now()
    }
    // 
    dispatch({type: "ADD_TODO", payload: newObjective})
  }

  const clearFinished = event => {
    event.preventDefault()
    // setObjectiveList(objectiveList.filter(objective => !objective.complete))
    dispatch({type: "CLEAR_FORM"})
  }

  return (
    <div className="App">
    {/* //   <header className="App-header">
        <h1>To Do List:</h1>
        <TodoForm addNew={addNew} />
    //   </header>
    //   <TodoList objectives={state} toggleItem={toggleItem} clearFinished={clearFinished}/> */}
      <header className="App-header">
        <h1>To Do List:</h1>
        <TodoForm addNew={addNew} tee={state}/>
      </header>
      {/* {state.objectives.map(objective => { */}
       <TodoList {...state} toggleItem={toggleItem} />
      {/* })} */}
      <button onClick={clearFinished}>Remove Completed Items</button>
    </div>
  );
}

export default App;
