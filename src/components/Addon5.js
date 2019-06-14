import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon5 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon5</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon5;