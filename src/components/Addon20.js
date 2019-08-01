import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Button from 'react-bootstrap/Button' ;

const scope = {Button}

class Addon20 extends Component {
    render() {
        return (
            <div>

                <FiddleComponent code='<Button pill variant="warning">
                    Warning
                    </Button>' scope = {scope}>



                </FiddleComponent>

				Cretaed by onur simsek
            </div>
        );
    }
}

export default Addon20;