import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import ProgressBar from 'react-bootstrap/ProgressBar'

const scope = {ProgressBar}

class Addon19 extends Component {
    render() {
        return (
            <div>
                <h1>Furkan TAN</h1>
                <FiddleComponent code='
                    <div>
                        <ProgressBar variant="success" now={40} />
                        <ProgressBar variant="info" now={20} />
                        <ProgressBar variant="warning" now={60} />
                        <ProgressBar variant="danger" now={80} />
                    </div>' scope={scope} >
                </FiddleComponent>
            </div>
        );
    }
}

export default Addon19;