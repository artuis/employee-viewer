import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

function Header() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Employee Viewer</h1>
            </Container>
        </Jumbotron>
    )
}

export default Header
