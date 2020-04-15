import React, {useState} from "react"

function TodoForm (props) {
    console.log("TODO FORM PROPS", props)
    const [state, setState] = useState({
        name: "",
        complete: false,
        id: props.tee.objectives.length
    })


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
            value={state.objectives}
            onChange={handleChanges}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm