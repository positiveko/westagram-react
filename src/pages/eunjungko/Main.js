import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <>
        <nav>
          <div className='navWrapper'>
            <img
              src='images/eunjungko/logo_text.png'
              alt='Instagram'
              className='textLogo'
            />
            <form className='search'>
              <div className='magnifier'></div>
              <input
                type='text'
                autoCapitalize='none'
                placeholder='검색'
                className='searchInput'
              />
              <span className='xbtn'></span>
              <div className='searchResultList displayNone'></div>
            </form>
            <div className='navRight'>
              <img
                src='images/eunjungko/home.png'
                alt='home'
                className='btn home'
              />
              <img
                src='images/eunjungko/airplane.png'
                alt='airplane'
                className='btn airplane'
              />
              <img
                src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png'
                alt='explore'
                className='btn explore'
              />
              <img
                src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
                alt='heart'
                className='btn heart'
              />
              <img
                src='images/eunjungko/userProfile.jpg'
                alt='userProfile'
                className='btn small'
              />
            </div>
          </div>
        </nav>

        <main>
          <div className='feeds'>
            <article>
              <div className='articleHeader'>
                <div className='userInfo'>
                  <img
                    src='images/eunjungko/userProfile.jpg'
                    alt='userProfile'
                    className='userProfile middle'
                  />
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
                      src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
                      alt='heart'
                      className='btn heart'
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
                <div className='commentSet'>
                  <div className='likeStatus'>
                    <span className='bold'>wecode</span>님 외{' '}
                    <span className='bold'>여러 명</span>이 좋아합니다
                  </div>
                  <div className='comment'>
                    <div className='commentSet'>
                      <span className='userId'>edie_ko</span>
                      <span className='userComment'>
                        댓글 작성 후 새로고침을 해보세요.
                      </span>
                      <button className='deleteBtn'>X</button>
                    </div>
                    <img
                      src='https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png'
                      alt='smallHeart'
                      className='smallHeart'
                    />
                  </div>
                </div>
                <div className='time gray'>4시간 전</div>
              </div>

              <form action='' className='commentForm'>
                <input
                  type='text'
                  className='commentInput'
                  placeholder='댓글 달기...'
                />
                <button className='addBtn'>게시</button>
              </form>
            </article>
          </div>

          <div className='main-right'>
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
              <div className='recommendBox'>
                <div className='userInfo'>
                  <img
                    src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/81836987_538327120224054_1485057901201457152_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=aQ-lmEOgM2UAX-OSZ1b&oh=5726bf0e489a3c27325ddf19ed829609&oe=5FBD63F0'
                    alt='userProfile'
                    className='userProfile middle'
                  />
                  <div className='userText'>
                    <div className='userName'>dooreplay</div>
                    <div className='follower gray sfont'>
                      salvame21님 외 1명이 팔로우 합니다
                    </div>
                  </div>
                </div>
                <div className='follow'>팔로우</div>
              </div>
              <div className='recommendBox'>
                <div className='userInfo'>
                  <img
                    src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118404165_231868348195869_8580469197286780227_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qfz8iQdwC5oAX-nlQyC&oh=29f916b9fbab4a15fc8b31fdbd58b5e6&oe=5FBDA762'
                    alt='userProfile'
                    className='userProfile middle'
                  />
                  <div className='userText'>
                    <div className='userName'>wecode_founder</div>
                    <div className='follower gray sfont'>
                      4wheeldxlocal님 외 4명이 팔로우 합니다
                    </div>
                  </div>
                </div>
                <div className='follow'>팔로우</div>
              </div>
              <div className='recommendBox'>
                <div className='userInfo'>
                  <img
                    src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/87701926_206861547063507_8284285653856813056_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=dpQt8Rv0rsIAX8fR8Eb&oh=09c00c16a58b588e87f756381b0844ed&oe=5FBAEC16'
                    alt='userProfile'
                    className='userProfile middle'
                  />
                  <div className='userText'>
                    <div className='userName'>ryuwisdom</div>
                    <div className='follower gray sfont'>
                      회원님을 위한 추천
                    </div>
                  </div>
                </div>
                <div className='follow'>팔로우</div>
              </div>
              <div className='recommendBox'>
                <div className='userInfo'>
                  <img
                    src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/122439936_373086020715696_1128162240157632848_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Qx6ltAAe8AMAX_m4cQA&oh=c4ae53b6f50b7a186731541e28099be3&oe=5FBCDA5D'
                    alt='userProfile'
                    className='userProfile middle'
                  />
                  <div className='userText'>
                    <div className='userName'>097.kim</div>
                    <div className='follower gray sfont'>
                      회원님을 위한 추천
                    </div>
                  </div>
                </div>
                <div className='follow'>팔로우</div>
              </div>
              <div className='recommendBox'>
                <div className='userInfo'>
                  <img
                    src='https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/84636487_2721190067977644_782901933093421056_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=UVTcRHVkWwAAX_7JjiU&oh=dd91d1aecaa9369a4697f73565c705e1&oe=5FBD5768'
                    alt='userProfile'
                    className='userProfile middle'
                  />
                  <div className='userText'>
                    <div className='userName'>hocheol_zhang</div>
                    <div className='follower gray sfont'>
                      회원님을 위한 추천
                    </div>
                  </div>
                </div>
                <div className='follow'>팔로우</div>
              </div>
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
              <p className='copyright lightgray'>
                © 2020 INSTAGRAM FROM FACEBOOK
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
