import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon3 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon3</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon3;