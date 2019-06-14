import React from 'react';
import './App.css';
import FiddleComponent from "./components/FiddleComponent";

function App() {
  return (
    <div className="App">
      React Components Playground
      <FiddleComponent code="<div>this is my div</div>" ></FiddleComponent>
    </div>
  );
}

export default App;
