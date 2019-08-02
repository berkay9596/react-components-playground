import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Card from 'react-bootstrap/Card';

const scope = {Card};
class Addon30 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<Card style={{ width: "18rem" }}>
                                         <Card.Body>
                                           <Card.Title>Card Title</Card.Title>
                                           <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                           <Card.Text>
                                             Some quick example text
                                           </Card.Text>
                                           <Card.Link href="#">Card Link</Card.Link>
                                           <Card.Link href="#">Another Link</Card.Link>
                                         </Card.Body>
                                       </Card>' scope={scope} ></FiddleComponent>
                                       Faruk Balcı
            </div>
        );
    }
}

export default Addon30;