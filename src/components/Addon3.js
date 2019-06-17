import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from 'react-bootstrap/Alert';

class Addon3 extends Component {
    render() {

        return (
            <div>
                <FiddleComponent code="<div>this is Addon3</div>" ></FiddleComponent>
                 <Alert variant="secondary">
                    This is a secondary alert—check it out!
                  </Alert>
            </div>
        );
    }
}

export default Addon3;