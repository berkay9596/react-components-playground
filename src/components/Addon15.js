import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Badge from 'react-bootstrap/Badge'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

const scope2 = {Badge};
const scope1 = {ButtonGroup};
const scope = {Button};

class Addon15 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon15 <Badge pill variant='primary'>
                    Primary
                </Badge> </div>" scope2={scope2} >
                </FiddleComponent>

                <FiddleComponent code="<div>this is Addon15<Button variant='secondary'>Left</Button>
                    <Button variant='secondary'>Middle</Button>
                    <Button variant='secondary'>Right</Button>
                </div>" scope={scope} >
                </FiddleComponent>


            </div>
        );
    }
}

export default Addon15;