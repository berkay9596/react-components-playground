import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon9 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon9</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon9;