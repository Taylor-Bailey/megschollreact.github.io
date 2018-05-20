import React, { Component } from 'react';
import Name from './Name';
import DevDesign from './DevDesign';
import Arrow from './images/down_arrow.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Name name="meg scholl"/>
        </div>
        <main>
          <img src={Arrow} alt="down arrow" className="arrow"/>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <DevDesign />
        </main>
      </div>
    );
  }
}

export default App;
