import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Badge from 'react-bootstrap/Badge';

class Addon17 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<h1>
                Example heading <Badge variant="secondary">New</Badge>
              </h1>' scope={scope} ></FiddleComponent>
                meltem 
            </div>
        );
    }
}

export default Addon37;
