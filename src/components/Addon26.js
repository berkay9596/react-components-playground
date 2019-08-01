import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Button from 'react-bootstrap/Button';

const scope = {Button};
class Addon26 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<div>this is Addon26 
                		<Button variant="outline-secondary">Secondary</Button></div>' scope={scope}></FiddleComponent>
            </div>
        );
    }
}

export default Addon26;