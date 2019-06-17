import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Badge from 'react-bootstrap/Badge';

const scope = {Badge};

class Addon1 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon1 <Badge pill variant='primary'>
                    Primary
                </Badge> </div>" scope={scope} ></FiddleComponent>

            </div>
        );
    }
}

export default Addon1;