import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon6 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon6</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon6;