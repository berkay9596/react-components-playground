import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Button from "react-bootstrap/Button";
class Addon43 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon43</div>" ></FiddleComponent>
            <button className="btn">Left</button>
            <button className="btn">Middle</button>
            <button className="btn">Right</button>
            <Button variant='outline-warning'>Warning</Button>
            </div>
        );
    }
}

export default Addon43;