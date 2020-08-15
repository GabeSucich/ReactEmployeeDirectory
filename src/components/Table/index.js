import React from 'react'
import "./style.css"

export function Table(props) {
    return (
        <div className="container table orange lighten-5">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Role</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}

export function TableRow({ player }) {

    return (
        <tr>
            <td>{player.name}</td>
            <td>{player.number}</td>
            <td>{player.side}</td>
            <td>{player.position}</td>
        </tr>
    )
}