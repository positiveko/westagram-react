import React, { Component } from 'react';
import Comment from './Comment/Comment';
import './Article.scss';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedComment: '',
      comments: [],
      userId: '',
      like: false,
    };
  }

  handleArticleLike = () => {
    this.props.onLike(this.props.article);
  };

  componentDidMount() {
    this.paintComment();
  }

  paintComment = () => {
    const comments = [
      {
        id: 1,
        userId: 'edie_ko',
        content: '댓글 작성 후 새로고침을 해보세요',
        like: false,
      },
      {
        id: 2,
        userId: 'edie_ko',
        content: '아직 아무 일도 벌어지지 않습니다',
        like: false,
      },
      { id: 3, userId: 'edie_ko', content: '추가할 기능입니다...', like: true },
    ];
    const userId = 'edie_ko';
    this.setState({
      comments: comments,
      userId: userId,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      addedComment: e.target.value,
    });
  };

  handleSubmitComment = (e) => {
    e.preventDefault();
    const { comments, addedComment, userId } = this.state;
    const addedComments = [...comments];
    if (addedComment.trim() == '') {
      return;
    }
    addedComments.push({
      id: Date.now(),
      userId: userId,
      content: addedComment,
      like: false,
    });
    this.setState({
      addedComment: '',
      comments: addedComments,
    });
  };

  handleCommentDelete = (cmt) => {
    const deletedComments = this.state.comments.filter(
      (el) => el.id !== cmt.id
    );
    this.setState({
      comments: deletedComments,
    });
  };

  handleCommentLike = (cmt) => {
    const { comments } = this.state;
    const likedComments = [...comments];
    likedComments.filter((el) => {
      if (el.id === cmt.id) {
        el.like = !el.like;
      }
    });
    this.setState({
      comments: likedComments,
    });
  };

  timeForToday = (value) => {
    const today = new Date();
    const timeValue = new Date(value);
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return '방금전';
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  };

  render() {
    const { article } = this.props;
    const { addedComment } = this.state;
    const activeBtn = !addedComment ? '' : '게시';
    const heartChange = !article.like
      ? 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
      : 'images/eunjungko/pinkheart.png';
    return (
      <article>
        <div className='articleHeader'>
          <div className='userInfo'>
            <div className='imgBox'>
              <img
                src={article.userImgSrc}
                alt='userProfile'
                className='userProfile middle'
              />
            </div>
            <div className='textArea'>
              <div className='userName'>{article.userName}</div>
              <div className='userLocation sfont'>{article.userLocation}</div>
            </div>
          </div>
          <img
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png'
            alt='three dots'
            className='threeBtn'
          />
        </div>
        <img
          src={article.articleImgSrc}
          alt='articleImg'
          className='articleImg'
        />
        <div className='articleFooter'>
          <div className='iconbar'>
            <div className='iconWrapper'>
              <img
                src={heartChange}
                alt='heart'
                className='btn heart'
                id={article.id}
                onClick={(el) => this.handleArticleLike(el)}
              />
              <img
                src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png'
                alt='comment'
                className='btn comment'
              />
              <img
                src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png'
                alt='share'
                className='btn share'
              />
            </div>
            <img
              src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png'
              alt='bookmark'
              className='btn bookmark'
            />
          </div>
          <div className='commentArea'>
            <div className='likeStatus'>
              <span className='bold'>{article.otherUserName}</span>님 외{' '}
              <span className='bold'>여러 명</span>이 좋아합니다
            </div>
            <div className='comment'></div>
            {this.state.comments.map((cmt) => (
              <Comment
                key={cmt.id}
                comment={cmt}
                onDelete={this.handleCommentDelete}
                onLike={this.handleCommentLike}
              />
            ))}
          </div>
          <div className='time gray'>{this.timeForToday(article.time)}</div>
        </div>

        <form
          className='commentForm'
          onSubmit={(e) => this.handleSubmitComment(e)}>
          <input
            type='text'
            className='commentInput'
            placeholder='댓글 달기...'
            value={addedComment}
            onChange={(e) => this.handleInputChange(e)}
          />
          <button className='addBtn'>{activeBtn}</button>
        </form>
      </article>
    );
  }
}

export default Article;
