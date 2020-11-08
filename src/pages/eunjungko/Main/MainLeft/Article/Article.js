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

  componentDidMount() {
    this.paintComment();
  }

  paintComment = () => {
    const comments = [
      { id: 1, userId: 'edie_ko', content: '댓글 작성 후 새로고침을 해보세요' },
      { id: 2, userId: 'edie_ko', content: '아직 아무 일도 벌어지지 않습니다' },
      { id: 3, userId: 'edie_ko', content: '추가할 기능입니다...' },
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
    addedComments.push({
      id: Date.now(),
      userId: userId,
      content: addedComment,
    });
    this.setState({
      addedComment: '',
      comments: addedComments,
    });
  };

  handleCommentDelete = (cmt) => {
    const comments = this.state.comments.filter((el) => el.id !== cmt.id);
    this.setState({
      comments: comments,
    });
  };

  render() {
    const { addedComment, like } = this.state;
    const addBtn = !addedComment ? '' : '게시';
    const heartChange = !like
      ? 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
      : 'images/eunjungko/pinkheart.png';
    return (
      <article>
        <div className='articleHeader'>
          <div className='userInfo'>
            <div className='imgBox'>
              <img
                src='images/eunjungko/userProfile.jpg'
                alt='userProfile'
                className='userProfile middle'
              />
            </div>
            <div className='textArea'>
              <div className='userName'>edie_ko</div>
              <div className='userLocation sfont'>위코드</div>
            </div>
          </div>
          <img
            src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png'
            alt='three dots'
            className='threeBtn'
          />
        </div>
        <img
          src='images/eunjungko/articleImg.jpg'
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
                onClick={() => this.setState({ like: !like })}
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
              <span className='bold'>wecode</span>님 외{' '}
              <span className='bold'>여러 명</span>이 좋아합니다
            </div>
            <div className='comment'></div>
            {this.state.comments.map((cmt) => (
              <Comment
                key={cmt.id}
                comment={cmt}
                onDelete={this.handleCommentDelete}
              />
            ))}
          </div>
          <div className='time gray'>4시간 전</div>
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
          <button className='addBtn'>{addBtn}</button>
        </form>
      </article>
    );
  }
}

export default Article;
