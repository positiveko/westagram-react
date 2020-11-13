import React, { Component } from 'react';
import RECOMMEND from './RecommendData';
import './MainRight.scss';

const menu = [
  '소개',
  '도움말',
  '홍보 센터',
  'API',
  '채용 정보',
  '개인정보처리방침',
  '약관',
  '위치',
  '인기 계정',
  '해시태그',
  '언어',
];

class MainRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: RECOMMEND,
    };
  }

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
            {menu.map((e) => (
              <li key={menu.length}>{e}</li>
            ))}
          </ul>
          <p className='copyright lightgray'>© 2020 INSTAGRAM FROM FACEBOOK</p>
        </div>
      </div>
    );
  }
}

export default MainRight;
