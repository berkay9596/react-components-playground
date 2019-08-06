import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Button from "react-bootstrap/Button";
class Addon42 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon42</div>" ></FiddleComponent>
            <button className="btn">Left</button>
            <button className="btn">Middle</button>
            <button className="btn">Right</button>
            </div>
        );
    }
}

export default Addon42;