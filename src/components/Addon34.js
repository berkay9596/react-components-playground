import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from 'react-bootstrap/Alert';

const scope = {Alert};
class Addon34 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<Alert  variant='danger'> Emre Can Tural 2 </Alert>"scope={scope}>


                </FiddleComponent>
            </div>
        );
    }
}

export default Addon34;