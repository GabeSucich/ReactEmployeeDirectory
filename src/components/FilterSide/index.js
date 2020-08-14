import React, {useState} from "react"
// import "./style.css"
import {POS_FILTER, ROLE_FILTER, SORT_NUM} from "../../utils/action"

function SeeAll({reducer}) {
    const [roster, dispatch] = reducer

    return (
        <button onClick={() => dispatch({type: ROLE_FILTER, side: "both"})}>See All Players</button>
    )

}

function SeeOffense({reducer}) {
    const [roster, dispatch] = reducer

    return (
        <button onClick={() => dispatch({type: ROLE_FILTER, side: "Offense"})}>See Offense</button>
    )

}

function SeeDefense({reducer}) {
    const [roster, dispatch] = reducer

    return (
        <button onClick={() => dispatch({type: ROLE_FILTER, side: "Defense"})}>See Defense</button>
    )

}

export default function FilterSide({reducer}) {

    const [roster, dispatch] = reducer

    function displayRelevantButtons() {
        if (roster.side === "both") {
            return [<SeeOffense key={1} reducer = {[roster, dispatch]}/>, <SeeDefense key={2} reducer = {[roster, dispatch]}/>]
        }

        else if (roster.side === "Offense") {
            return [<SeeDefense key={1} reducer = {[roster, dispatch]}/>, <SeeAll key={2} reducer = {[roster, dispatch]}/>]
        }

        else if (roster.side === "Defense") {
            return [<SeeOffense reducer = {[roster, dispatch]}/>, <SeeAll reducer = {[roster, dispatch]}/>]
        }
    }

    return (
        <div>
            {displayRelevantButtons()}
        </div>
    )
}