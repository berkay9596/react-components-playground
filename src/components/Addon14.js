import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const scope = {Accordion , Button , Card};

class Addon14 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<Accordion defaultActiveKey="0">
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Click me!
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0"><Card.Body>Hello! I m the body</Card.Body></Accordion.Collapse>
        </Card>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Click me!
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1"><Card.Body>Hello! m another body</Card.Body></Accordion.Collapse>
        </Card>
        </Accordion>' scope={scope} ></FiddleComponent>

                Bilge Kurtoğlu
            </div>
        );
    }
}

export default Addon14;
