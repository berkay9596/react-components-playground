import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Badge from 'react-bootstrap/Badge';


const scope = {Badge};

class Addon39 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<Badge pill variant="success">
                    Success
                </Badge>' scope={scope} ></FiddleComponent>
                ahmet emre

            </div>
        );
    }
}

export default Addon39;