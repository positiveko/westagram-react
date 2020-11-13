import React, { Component } from 'react';
import './Main.scss';
import '../../../Styles/common.scss';
import Nav from '../../../Components/Nav/Nav';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

class MainEj extends Component {
  render() {
    return (
      <div className='MainEj'>
        <Nav />
        <main>
          <MainLeft />
          <MainRight />
        </main>
      </div>
    );
  }
}

export default MainEj;
