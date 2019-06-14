import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon10 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon10</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon10;