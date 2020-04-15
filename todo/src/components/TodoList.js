import React from "react"
import Todo from "./Todo"

function TodoList({objectives, toggleItem}){
    // console.log("TODOLIST PROPS -->", props)
    return(
        <div>
            {objectives.map(obj => {
                return <Todo {...obj} key={obj.id} toggleItem={toggleItem}/>
            })}
            {/* <button onClick={props.clearFinished}>Remove Completed Items</button> */}
            {/* <p className={`objective${complete ? ' complete' : ''}`}>{name}</p> */}
            
        </div>
    )
}

export default TodoList