import React from "react"
import Todo from "./Todo"

function TodoList(props){
    console.log("TODOLIST PROPS -->", props.objectives)
    return(
        <div>
            {props.objectives.map(obj => {
                return <Todo key={obj.id} objective={obj} toggleItem={props.toggleItem}/>
            })}
            <button onClick={props.clearFinished}>Remove Completed Items</button>
        </div>
    )
}

export default TodoList