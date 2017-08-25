import React from 'react';

// TODO react prop types

const DetailsComponent = props => (
  <div id="details">
    <div className="appHeader">
      <h2>App Name - 103/200 fields</h2>
      <h3>Retrieved: {Date.now()}</h3>
    </div>
  </div>
);

export default DetailsComponent;
