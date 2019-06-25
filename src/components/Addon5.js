import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from 'react-bootstrap/Alert';

const scope = {Alert};
class Addon5 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<Alert  variant='primary'> This is a gizay's page—check it out! </Alert>"scope={scope}>
                </FiddleComponent>
            </div>
        );
    }
}

export default Addon5;