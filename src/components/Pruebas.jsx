import React from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'


const Pruebas = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/humildad.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary">Left</Button>
                    <h3>county</h3>
                    <Button variant="primary">Right</Button>
                </ButtonGroup>       
            </Card.Body>
            </Card>
        </div>
    )
}

export default Pruebas
