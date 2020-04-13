import React from "react"

function Todo(props){
    return(
        <div className={`item${props.objective.complete ? ' complete' : ''}`}
             onClick={()=> props.toggleItem(props.objective.id)}>
            <p>{props.objective.name}</p>
        </div>
    )
}

export default Todo