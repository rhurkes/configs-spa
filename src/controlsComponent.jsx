import React from 'react';

const clickHandler = () => {
  console.log('Clearning cache...');
  localStorage.clear();
};

const controlsComponent = () => (
  <div id="controls">
    <div>
      <span>Filter:</span>
      <input type="text" id="filterText" />
      <input type="checkbox" id="regexFilter" />
      <span>Use regex?</span>
    </div>
    <div>
      <button id="clearCache" onClick={clickHandler}>Clear Cache</button>
    </div>
  </div>
);

export default controlsComponent;
