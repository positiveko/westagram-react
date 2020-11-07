import React, { Component } from 'react';
import './Story.scss';

// const DataList = './searchdata.json'

class Story extends Component {
  render() {
    return (
      <div className='storyBox'>
        <div className='story'>
          <div className='storyImgWrapper'>
            <img
              src='https://i.pinimg.com/564x/e8/e2/e5/e8e2e5848aaaded8fb2132cecac13b33.jpg'
              alt='story icon'
            />
          </div>
          <div className='storyUser'>positiveko</div>
        </div>
        <div className='story'>
          <div className='storyImgWrapper'>
            <img
              src='https://i.pinimg.com/564x/15/5b/af/155bafdb1a6ae1abfc07ff8e5149e5a9.jpg'
              alt='story icon'
            />
          </div>
          <div className='storyUser'>catpurple</div>
        </div>
      </div>
    );
  }
}
export default Story;
