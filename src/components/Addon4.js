import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon4 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon4</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon4;