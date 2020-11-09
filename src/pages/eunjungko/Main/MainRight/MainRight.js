import React, { Component } from 'react';
import RECOMMEND from './RecommendData';
import './MainRight.scss';

class MainRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      recommendList: RECOMMEND,
    });
  };

  render() {
    const { recommendList } = this.state;
    return (
      <div className='Main-right'>
        <div className='userInfo'>
          <img
            src='images/eunjungko/userProfile.jpg'
            alt='userProfile'
            className='userProfile big'
          />
          <div className='textArea'>
            <div className='userName'>edie_ko</div>
            <div className='userIntro gray'>고은정 Edie</div>
          </div>
        </div>
        <div className='recommendText'>
          <p className='darkgray bold'>회원님을 위한 추천</p>
          <p className='sfont'>모두 보기</p>
        </div>
        <div className='recommended'>
          {recommendList.map((el) => (
            <div className='recommendBox' key={el.id}>
              <div className='userInfo'>
                <img
                  src={el.imgSrc}
                  alt='userProfile'
                  className='userProfile middle'
                />
                <div className='userText'>
                  <div className='userName'>{el.recommendedUser}</div>
                  <div className='follower gray sfont'>회원님을 위한 추천</div>
                </div>
              </div>
              <div className='follow'>팔로우</div>
            </div>
          ))}
        </div>
        <div className='detail'>
          <ul className='menu lightgray'>
            <li>소개</li>
            <li>도움말</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>위치</li>
            <li>인기 계정</li>
            <li>해시태그</li>
            <li>언어</li>
          </ul>
          <p className='copyright lightgray'>© 2020 INSTAGRAM FROM FACEBOOK</p>
        </div>
      </div>
    );
  }
}

export default MainRight;
