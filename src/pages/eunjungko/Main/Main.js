import React, { Component } from 'react';
import './Main.scss';
import '../../../Styles/common.scss';
import Nav from './Nav/Nav';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='bodyEunjung'>
        <Nav />
        <main>
          <MainLeft />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default Main;
