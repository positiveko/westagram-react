import React, { Component } from 'react';
import './Story.scss';
import STORY from './StoryData';

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storyList: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      storyList: STORY,
    });
  };

  render() {
    const { storyList } = this.state;
    return (
      <div className='storyBox'>
        {storyList.map((el) => (
          <div className='story' key={el.id}>
            <div className='storyImgWrapper'>
              <img src={el.imgSrc} alt='story icon' />
            </div>
            <div className='storyUser'>{el.storyUser}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default Story;
