import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import Dropdown from "react-bootstrap/Dropdown";

const scope = {Dropdown};

class Addon12 extends Component {
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
  <div key={idx}>
  <Dropdown>
  <Dropdown.Toggle variant={variant} id='dropdown-basic'> Dropdown Button </Dropdown.Toggle>
  <Dropdown.Menu> <Dropdown.Item href='#/action-1'>Action</Dropdown.Item> <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item> <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item> </Dropdown.Menu> </Dropdown></div>
));
                " scope={scope} ></FiddleComponent>

            </div>
        );
    }
}

export default Addon12;
