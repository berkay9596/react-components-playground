import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import ButtonToolbar  from 'react-bootstrap/ButtonToolbar';
import Button  from 'react-bootstrap/Button';
const scope = { ButtonToolbar ,Button };
class Addon17 extends Component {
    render() {
        return (
            <div>
            <FiddleComponent code="
            <div>
            <ButtonToolbar>
            <Button >
              Large button
            </Button>
            <Button>
              Large button
            </Button>
          </ButtonToolbar>
            
          <ButtonToolbar>
            <Button>
              Small button
            </Button>
            <Button>
              Small button
            </Button>
          </ButtonToolbar> 
            <h1>Koray Kara</h1>
            </div>
            " scope={scope} ></FiddleComponent>
            
            </div>
        );
    }
}

export default Addon17;