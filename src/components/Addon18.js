import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import FiddleComponent from "./FiddleComponent";
import Spinner from 'react-bootstrap/Spinner';
const scope = {Spinner}
class Addon18 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<div>
                <Spinner animation="border" variant="primary" />
                                         <Spinner animation="border" variant="secondary" />
                                         <Spinner animation="border" variant="success" />
                                         <Spinner animation="border" variant="danger" />
                                         <Spinner animation="border" variant="warning" />
                                         <Spinner animation="border" variant="info" />
                                         <Spinner animation="border" variant="light" />
                                         <Spinner animation="border" variant="dark" />
                                         <Spinner animation="grow" variant="primary" />
                                         <Spinner animation="grow" variant="secondary" />
                                         <Spinner animation="grow" variant="success" />
                                         <Spinner animation="grow" variant="danger" />
                                         <Spinner animation="grow" variant="warning" />
                                         <Spinner animation="grow" variant="info" />
                                         <Spinner animation="grow" variant="light" />
                                         <Spinner animation="grow" variant="dark" />
                                         </div>' scope= {scope} ></FiddleComponent>
                Zeynep Gözel
            </div>
        );
    }
}

export default Addon18;