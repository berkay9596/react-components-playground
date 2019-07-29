import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from 'react-bootstrap/Alert';


const scope = {Alert};
class Addon11 extends Component {
    render() {
        return (
            <div>

                <FiddleComponent code="
                [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
));" scope={scope} ></FiddleComponent>
            </div>
        );
    }
}

export default Addon11;
