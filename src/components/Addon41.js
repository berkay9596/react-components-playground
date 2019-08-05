import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const scope = {Card, Button};
class Addon41 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon41
                <Card>
                  <Card.Header>Card</Card.Header>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant='primary'>Go nowhere</Button>
                  </Card.Body>
                </Card>
                </div>" scope={scope}></FiddleComponent>

            </div>
        );
    }
}

export default Addon41;