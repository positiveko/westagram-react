import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  handleCommentDelete = () => {
    this.props.onDelete(this.props.comment);
  };

  render() {
    const { userId, content } = this.props.comment;
    return (
      <div className='comment'>
        <div className='commentSet'>
          <span className='userId'>{userId}</span>
          <span className='userComment'>{content}</span>
          <button
            className='deleteBtn'
            onClick={() => this.handleCommentDelete()}>
            X
          </button>
        </div>
        <img
          src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
          alt='smallHeart'
          className='smallHeart'
        />
      </div>
    );
  }
}

export default Comment;
