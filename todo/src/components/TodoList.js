import React from "react"
import Todo from "./Todo"

function TodoList(props){
    console.log("TODOLIST PROPS -->", props)
    return(
        <div>
            {/* {props.objectives.map(obj => {
                return <Todo key={obj.id} objective={obj} toggleItem={() => props.toggleItem(props.objectives)}/>
            })}
            <button onClick={props.clearFinished}>Remove Completed Items</button> */}
            <p onClick={() => props.toggleItem(props.objectives)} className={`objective${props.objectives.complete ? ' complete' : ''}`}>{props.objectives.name}</p>
            
        </div>
    )
}

export default TodoList