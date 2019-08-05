import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";

const scope = {Alert};
class Addon40 extends Component {
    render() {
        return (

            <div>
                <FiddleComponent code='<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    React Odev1
  </p>
  <hr />
  <p className="mb-0">
   Harun Yekta Sökelen
  </p>
</Alert>' scope = {scope}></FiddleComponent>

            </div>
        );
    }
}

export default Addon40;