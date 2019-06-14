import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon7 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon7</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon7;