import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import button from 'react-bootstrap/Button';


const scope = {button};
class Addon36 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='<div className="btn-group">
  <button className="btn">Left</button>
  <button className="btn">Middle</button>
  <button className="btn">Right</button>
</div>' scope={scope} ></FiddleComponent>



                <FiddleComponent code='<div className="btn-group" style = {{ fontSize: "100px"}}  >
  <button className="btn-toolbar" style = {{color: "#8a2be2",  background: "#ffddff"}} >Left</button>
  <button className="btn-toolbar" style = {{color: "#8f4477",  background: "#ffddff"}}>Middle</button>
  <button className="btn-toolbar" style = {{color: "#e83c76",  background: "#ffddff"}}>Right</button>
</div>' scope={scope} ></FiddleComponent>


                <span className="label" style = {{color: "#8a2be2", fontSize: "50px"}}>Nur Bengisu ÇAM</span>


            </div>
        );
    }
}

export default Addon36;