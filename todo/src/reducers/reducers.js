import React from "react"

export const reducer = (state, action) => {
 switch(action.type){   
    case "ADD_TODO":
        return{
            objectives: [...state.objectives, action.payload]
        }
    case "TOGGLE":
        return{
            ...state,
            objectives: state.objectives.map(task => {
                if(task.id === action.payload){
                    return {
                        ...task, complete: !task.complete
                    }
                }else{
                    return task
                }
            })
        }
    case "CLEAR_FORM":
        return{
            ...state,
            objectives: state.objectives.map(task => {
                if(task.complete===true){
                    return{
                        ...task - task.complete
                    }
                }else{
                    return task
                }
            })
        } 
    default:
        return state
  }
}

let initialState = {objectives: [
    {
        name: "Do the dishes",
        complete: false,
        id: 0
    },
    {
        name: "Clean the kitchen",
        complete: false,
        id: 1
    },
    {
        name: "Sweep/mop floors",
        complete: false,
        id: 2
    }
]}

export default initialState