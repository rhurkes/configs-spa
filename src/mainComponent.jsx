import React from 'react';
import ReposComponent from './reposComponent';
import ControlsComponent from './controlsComponent';
import DetailsComponent from './detailsComponent';

class MainComponent extends Component {
  render() {
    return (<div id="main">
      <div id="nav">
        <ReposComponent />
      </div>
      <div id="content">
        <ControlsComponent />
        <DetailsComponent />
      </div>
    </div>);
  }
}

export default MainComponent;
