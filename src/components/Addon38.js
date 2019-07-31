import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon38 extends Component {
    render() {
        return (
  <ButtonToolbar>
  <Button variant="outline-primary">Primary</Button>
  <Button variant="outline-secondary">Secondary</Button>
  <Button variant="outline-success">Success</Button>
  <Button variant="outline-warning">Warning</Button>
            </ButtonToolbar>
                <FiddleComponent code="<div>this is Addon38</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon38;
