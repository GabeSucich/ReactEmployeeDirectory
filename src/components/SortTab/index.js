import React from "react"
import "./style.css"
import {POS_FILTER, ROLE_FILTER, SORT_NUM} from "../../utils/action"


export default function SortTab({reducer}) {

    const [roster, dispatch] = reducer

    return (
        <button onClick = {() => dispatch({type: SORT_NUM})}>Sort by Number</button>
    )

}