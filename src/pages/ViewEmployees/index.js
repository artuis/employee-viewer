import React from 'react';
import Header from '../../components/Header';
import EmployeeTable from '../../components/EmployeeTable';
import { Container } from 'react-bootstrap';


export default function ViewEmployees() {
    return (
        <Container>
            <Header />
            <EmployeeTable />
        </Container>
    )
}
