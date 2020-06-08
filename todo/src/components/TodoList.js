import React from "react"
import Todo from "./Todo"

function TodoList({objectives, toggleItem}){
    return(
        <div>
            {objectives.map(obj => {
                return <Todo {...obj} key={obj.id} toggleItem={toggleItem}/>
            })} 
        </div>
    )
}

export default TodoList