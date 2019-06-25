import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from 'react-bootstrap/Alert';

class Addon4 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon4</div>" ></FiddleComponent>
                <Alert variant="danger">
                    This is a danger alert—check it out!
                  </Alert>
            </div>
        );
    }
}

export default Addon4;