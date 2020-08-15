import React from "react"
import "./style.css"
import { POS_FILTER, ROLE_FILTER, SORT_NUM } from "../../utils/action"


export default function SortTab({ reducer }) {

    const [roster, dispatch] = reducer

    return (
        <div className="center-align">
            <a className="waves-effect waves-light blue darken-4 btn-small" onClick={() => dispatch({ type: SORT_NUM })}>Sort by Number</a>
        </div>
    )

}