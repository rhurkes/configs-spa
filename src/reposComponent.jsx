import React from 'react';
import appData from './appData';

const clickHandler = (e) => {
  console.log(e);
};

const ReposComponent = () => {
  const apps = appData.map((app) => {
    return (
      <li>
        <button onClick={clickHandler}>{app.name}</button>
      </li>
    );
  });

  return (<ol>{apps}</ol>);
};

export default ReposComponent;
