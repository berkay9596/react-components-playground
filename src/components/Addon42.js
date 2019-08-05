import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon42 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon42</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon42;