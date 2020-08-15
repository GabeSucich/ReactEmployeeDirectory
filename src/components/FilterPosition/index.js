import React, { useState } from "react"
import "./style.css"
import { POS_FILTER, ROLE_FILTER, SORT_NUM, SHOW_ALL } from "../../utils/action"


export default function FilterPosition({ reducer }) {

    const [roster, dispatch] = reducer
    const [filter, setFilter] = useState('')
    const [invalid, setValidation] = useState(false)

    function handleChange(event) {
        setFilter(event.target.value)
    }

    const positionArr = ["Quarterback", "Running Back", "Wide Receiver", "Tight End", "Lineman", "Safety", "Corner Back", "Line Backer"]

    function handleSubmit() {
        if (positionArr.includes(filter)) {
            dispatch({ type: POS_FILTER, position: filter })
        }
        else {
            setValidation(true)
            setTimeout(() => {
                setValidation(false)
            }, 1000)
        }

        setFilter("")

    }

    return (
        <div>
            <form>
                <div>
                    <input
                        className="form-center input-field"
                        value={filter}
                        onChange={handleChange}
                        placeholder="Position"
                    />
                </div>
            </form>
            <a className="waves-effect waves-light blue darken-4 btn-small" onClick={() => handleSubmit()}>Search by Position</a>
            <br/>

            {invalid &&
                <div className="invalid-alert orange darken-4 white-text">Enter a valid position</div>
            }
            {roster.filtered &&
                <a id="show-all" className="waves-effect waves-light orange darken-4 btn-small" onClick={() => dispatch({ type: SHOW_ALL })}>Show All Players</a>
            }


        </div>
    )

}