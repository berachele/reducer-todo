import React from "react"

export const reducer = (state, action) => {
 switch(action.type){   
    case "ADD_TODO":
        return[
            ...state, action.payload
        ]
    case "TOGGLE":
        return[
            ...state, action.payload
        ]
    case "CLEAR_FORM":
        return[
            ...state, state.filter(objective => {return !objective.complete})
        ]
    default:
        return state
  }
}

let objectives = [
    {
        name: "Do the dishes",
        complete: false,
        id: 1234
    },
    {
        name: "Clean the kitchen",
        complete: false,
        id: 1235
    },
    {
        name: "Sweep/mop floors",
        complete: false,
        id:1236
    }
]

export default objectives