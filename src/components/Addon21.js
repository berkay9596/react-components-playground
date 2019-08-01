import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Spinner from 'react-bootstrap/Spinner'

const scope = {Spinner};

class Addon21 extends Component {
    render() {
        return (
            <div>kadir akın korkunç
                <FiddleComponent code=" <Spinner animation='border' size='sm's variant='primary'/>" scope = {scope} >
                </FiddleComponent>

                animation secenekleri : 'border' | 'grow' <br/>
                size secenegi : 'sm' <br/>
                variant secenegi : 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

      
            </div>
        );
    }
}

export default Addon21;