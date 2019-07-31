import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import progress from 'react-bootstrap/ProgressBar';


const scope = {progress};
class Addon17 extends Component {
    render() {
        return (

            <div>
                <FiddleComponent code='<div className="progress">
  <div className="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>' scope={scope} ></FiddleComponent>

                <FiddleComponent code='<div className="progress">
  <div className="progress-bar bg-warning w-25" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>' scope={scope} ></FiddleComponent>
       


            </div>
        );
    }
}

export default Addon17;
