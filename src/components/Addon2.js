import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon2 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon2</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon2;