import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from 'react-bootstrap/Alert'
const scope = {Alert};
class Addon6 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<Alert variant = 'dark'>This is a mustafaberat alert with{' '}</Alert>" scope = {scope}></FiddleComponent>

            </div>
        );
    }
}

export default Addon6;