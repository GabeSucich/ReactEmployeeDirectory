import "./style.css"

export function Table(props) {
    return (
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
        
    )
}

export function TableRow() {
    

    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )
}