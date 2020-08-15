import React, { useState } from "react"
import "./style.css"
import { POS_FILTER, ROLE_FILTER, SORT_NUM } from "../../utils/action"
import Col from "../Col"

function SeeAll({ reducer }) {
    const [roster, dispatch] = reducer

    return (
        <a className="waves-effect waves-light orange darken-4 btn-small" onClick={() => dispatch({ type: ROLE_FILTER, side: "both" })}>See All Players</a>
    )

}

function SeeOffense({ reducer }) {
    const [roster, dispatch] = reducer

    return (
        <a className="waves-effect waves-light orange darken-4 btn-small"onClick={() => dispatch({ type: ROLE_FILTER, side: "Offense" })}>See Offense</a>
    )

}

function SeeDefense({ reducer }) {
    const [roster, dispatch] = reducer

    return (
        <a className="waves-effect waves-light orange darken-4 btn-small" onClick={() => dispatch({ type: ROLE_FILTER, side: "Defense" })}>See Defense</a>
    )

}

export default function FilterSide({ reducer }) {

    const [roster, dispatch] = reducer

    function displayRelevantButtons() {
        if (roster.side === "both") {
            return [<SeeOffense key={1} reducer={[roster, dispatch]} />, <SeeDefense key={2} reducer={[roster, dispatch]} />]
        }

        else if (roster.side === "Offense") {
            return [<SeeDefense key={1} reducer={[roster, dispatch]} />, <SeeAll key={2} reducer={[roster, dispatch]} />]
        }

        else if (roster.side === "Defense") {
            return [<SeeOffense reducer={[roster, dispatch]} />, <SeeAll reducer={[roster, dispatch]} />]
        }
    }

    return (
        <Col size="col s8 push-s2">
            <div className="center-align">
                {displayRelevantButtons()}
            </div>
        </Col>
    )
}