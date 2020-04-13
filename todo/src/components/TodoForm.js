import React, {useState} from "react"

function TodoForm (props) {
    console.log("TODO FORM PROPS", props)
    const [state, setState] = useState("")

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
        <form onSubmit={submitForm}>
            <input name="name"
            placeholder="Add Item"
            value={state}
            onChange={handleChanges}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm