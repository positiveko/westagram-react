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
        this.setState({
          articleList: res,
        });
      });
  }

  handleArticleLike = (article) => {
    const articleList = [...this.state.articleList];
    articleList.filter((el) => {
      if (el.id == article.id) {
        el.like = !el.like;
      }
    });
    this.setState({
      articleList,
    });
  };

  render() {
    const { articleList } = this.state;
    return (
      <div className='MainLeft'>
        <Story />
        <div className='articleArea'>
          {articleList.map((el) => (
            <Article key={el.id} article={el} onLike={this.handleArticleLike} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainLeft;
