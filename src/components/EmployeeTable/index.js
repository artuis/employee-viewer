import React, { useState, useEffect } from 'react'
import API from '../../utils/API';
import { Table, Button } from 'react-bootstrap';
import EmployeeRow from '../EmployeeRow';

const EmployeeTable = ()=> {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        if (employees.length < 1) {
            API.xEmployees(10)
            .then(res => {
                setEmployees(res.data.results.map((employeeInfo, index) => {
                    return {
                        id          : employeeInfo.login.uuid,
                        Photo       : employeeInfo.picture.thumbnail,
                        LastName    : employeeInfo.name.last,
                        FirstName   : employeeInfo.name.first,
                        PhoneNumber : employeeInfo.phone,
                        Email       : employeeInfo.email
                    }
                }))
            })
            .catch(err => console.log(err))}
        });

    const handleOnClick = event => {
        setEmployees(employees.concat().sort((a, b) => a[event.target.name].toLowerCase().localeCompare(b[event.target.name].toLowerCase())));
    }

    return (
        <Table striped>
            <thead>
                <tr>
                    <th><Button variant="light" disabled>Photo</Button></th>
                    <th><Button variant="light" name="LastName" onClick={event=> handleOnClick(event)}>Last Name</Button></th>
                    <th><Button variant="light" name="FirstName" onClick={event=> handleOnClick(event)}>First Name</Button></th>
                    <th><Button variant="light" disabled>Phone Number</Button></th>
                    <th><Button variant="light" disabled>Email</Button></th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => <EmployeeRow key = {employee.id} employee = {employee}/>)}
            </tbody>
        </Table>
    )
}

export default EmployeeTable
