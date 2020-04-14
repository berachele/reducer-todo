import React, {useReducer} from "react"

function TodoForm (props) {
    console.log("TODO FORM PROPS", props)
    // const [state, setState] = useState("")
    const [state, dispatch] = useReducer(reducer, objectives)

    const handleChanges = event => {
        event.preventDefault()
        setState(
            event.target.value
        )
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNew(state)
    }
    return(
        <form onSubmit={()=>dispatch({ type: "ADD_TODO" })}>
            <input name="name"
            placeholder="Add Item"
            value={state}
            onChange={handleChanges}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm