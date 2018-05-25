import React from "react";

export default (props) => {
    return (
        <tr>
            <td>{props.employee.firstName}</td>
            <td>{props.employee.lastName}</td>
            <td>{props.employee.description}</td>
        </tr>
    )
}