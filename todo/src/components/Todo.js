import React from "react"

function Todo({toggleItem, complete, id, name}){
    // console.log("Props in TODO", props)
    return(
        <div className={`objective${complete ? ' complete' : ''}`}
        onClick={()=> toggleItem(id)} >
            <p>{name}</p>
        </div>
    )
}

export default Todo