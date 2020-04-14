import React from "react"

function Todo(props){
    console.log("Props in TODO", props)
    return(
        <div className={`objective${props.objective.complete ? ' complete' : ''}`}
        onClick={()=> props.toggleItem(props.objective.id)} >
            <p>{props.objective.name}</p>
        </div>
    )
}

export default Todo