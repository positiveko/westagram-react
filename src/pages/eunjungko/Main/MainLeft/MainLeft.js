import React, { Component } from 'react';
import Story from './Story/Story';
import './MainLeft.scss';
import Article from './Article/Article';

class MainLeft extends Component {
  render() {
    return (
      <div className='MainLeft'>
        <Story />
        <div className='articleArea'>
          <Article />
        </div>
      </div>
    );
  }
}

export default MainLeft;
