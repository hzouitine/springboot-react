import React from "react";
import Employee from "./Employee";
export default (props) => {

    if (props.employees) {
        const employeesArr = JSON.parse(props.employees);
        var employees = employeesArr.map(employee =>
            <Employee key={employee.id} employee={employee}/>
        );
    }
    return (
        <table>
            <tbody>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Description</th>
            </tr>
            {employees}
            </tbody>
        </table>
    )
}