import React from "react"

function TodoForm (props) {
    console.log("TODO FORM PROPS", props)

    const handleChanges = event => {
        event.preventDefault()
        setObjectiveList=[newObjective = event.target.value]
    }

    const submitForm = event => {
        event.preventDefault()
        props.addNew(props.newObjective)
    }
    return(
        <form onSubmit={submitForm}>
            <input name="name"
            placeholder="Add Item"
            value={props.newObjective}
            onChange={handleChanges}/>
            <button>Add</button>
        </form>
    )
}

export default TodoForm