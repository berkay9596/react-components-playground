import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Button from 'react-bootstrap/Button';


const scope = {Button};

class Addon31 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div> this is Addon31
                    <br/>
                   <Button variant='outline-warning'>Warning</Button>
                </div>" scope={scope} ></FiddleComponent>
            </div>
        );
    }
}

export default Addon31;