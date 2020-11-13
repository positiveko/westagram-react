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
    fetch('/data/ArticleData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          articleList: res,
        });
      });
  }

  handleArticleLike = (articleId) => {
    const { articleList } = this.state;
    // const articleList = [...this.state.articleList];
    // articleList.filter((el) => {
    //   if (el.id == article.id) {
    //     el.like = !el.like;
    //   }
    // });
    this.setState({
      articleList: this.state.articleList.map((article) => {
        if (articleId !== article.id) {
          return article;
        } else {
          return { ...article, like: !article.like };
        }
      }),
    });
  };

  render() {
    const { articleList } = this.state;
    return (
      <div className='MainLeft'>
        <Story />
        <div className='articleArea'>
          {articleList.map((el) => (
            <Article
              key={el.id}
              article={el}
              onLike={() => this.handleArticleLike(el.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MainLeft;
