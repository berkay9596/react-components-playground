import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Button from 'react-bootstrap/Button' ;

class Addon20 extends Component {
    render() {
        return (
            <div>

                <FiddleComponent code="<div>this is Addon20</div>" ></FiddleComponent>
				<Button variant="warning">Warning</Button>
				onur simsek
            </div>
        );
    }
}

export default Addon20;