import React, {useState} from "react"
// import "./style.css"
import {POS_FILTER, ROLE_FILTER, SORT_NUM} from "../../utils/action"

export default function FilterPosition ({reducer}) {

    const [roster, dispatch] = reducer
    const [filter, setFilter] = useState('')

    function handleChange(event) {
        setFilter(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        dispatch({type:POS_FILTER, position: filter})
        setFilter("")
        
    }

    return (
        <form>
            <input
                className = "form-control"
                value={filter}
                onChange = {handleChange}
            />
            <button onClick={(event) => handleSubmit(event)}>Submit</button>
        </form>
    )

}