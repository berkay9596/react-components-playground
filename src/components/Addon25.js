import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const scope = {Jumbotron, Button};

class Addon25 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling
                       extra attention to featured content or information.</p>
                    <p>
                        <Button variant="primary" href="#/learnmore">Learn more</Button>
                    </p>
                 </Jumbotron></div>'scope={scope}></FiddleComponent>

                Fatih Saracoglu
            </div>
        );
    }
}

export default Addon25;