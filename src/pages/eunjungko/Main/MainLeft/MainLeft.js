import React, { Component } from 'react';
import Story from './Story/Story';
import './MainLeft.scss';
import Article from './Article/Article';

class MainLeft extends Component {
  constructor() {
    super();
    this.state = {
      articleList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/ArticleData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        this.setState({
          articleList: res,
        });
      });
  }

  render() {
    const { articleList } = this.state;
    // console.log(articleList);
    return (
      <div className='MainLeft'>
        <Story />
        <div className='articleArea'>
          {articleList.map((el) => (
            <Article key={el.id} article={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainLeft;
