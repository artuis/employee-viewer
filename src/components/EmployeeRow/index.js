import React from 'react'

function EmployeeRow(props) {
    return (
        <tr>
            <td><img src= {props.employee.Photo} alt={`${props.employee.FirstName} ${props.employee.LastName}`}/></td>
            <td>{props.employee.LastName}</td>
            <td>{props.employee.FirstName}</td>
            <td>{props.employee.PhoneNumber}</td>
            <td>{props.employee.Email}</td>
        </tr>
    )
}


export default EmployeeRow

