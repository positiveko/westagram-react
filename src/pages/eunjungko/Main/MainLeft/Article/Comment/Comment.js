import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  handleCommentDelete = () => {
    this.props.onDelete(this.props.comment);
  };

  handleCommentLike = () => {
    this.props.onLike(this.props.comment);
  };

  render() {
    const { userId, content, like } = this.props.comment;
    const heartChange = !like
      ? 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
      : 'images/eunjungko/pinkheart.png';
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
          src={heartChange}
          alt='smallHeart'
          className='smallHeart'
          onClick={() => this.handleCommentLike()}
        />
      </div>
    );
  }
}

export default Comment;
