import React from "react"

function Todo({toggleItem, complete, id, name}){
    return(
        <div className={`objective${complete ? ' complete' : ''}`}
        onClick={()=> toggleItem(id)} >
            <p>{name}</p>
        </div>
    )
}

export default Todo