import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from 'react-bootstrap/Alert';


const scope = {Alert};
class Addon38 extends Component {
    render() {
        return (
            <div>

                <FiddleComponent code="
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
    This is a {variant} alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
));" scope={scope} ></FiddleComponent>
            </div>
        );
    }
}

export default Addon38;
