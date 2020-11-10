import React, { Component } from 'react';
import './Nav.scss';
import SEARCH from './SearchData';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
      searchValue: '',
      searchPool: [],
      tempList: [],
      showList: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      searchPool: SEARCH,
    });
  };

  onSearchInputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  searchId = (e) => {
    e.preventDefault();
    const { searchValue, searchPool } = this.state;
    let searchKeywords = searchValue.split(' ');
    this.setState({
      tempList: [],
      showList: false,
    });
    let tempList = searchPool.slice();
    if (searchValue.trim() == '') {
      this.setState({ showList: false });
      return;
    }
    searchKeywords.forEach((key) => {
      tempList = tempList.filter((e) => {
        if (e.userId.includes(key)) {
          return true;
        }
      });
    });
    this.setState({ tempList });
    if (tempList.length == 0) {
      this.setState({ showList: false });
    } else {
      this.setState({ tempList, showList: true });
    }
  };

  render() {
    const { searchActive, searchValue, showList, tempList } = this.state;

    return (
      <div className='Nav'>
        <div className='NavWrapper'>
          <img
            src='images/eunjungko/logo_text.png'
            alt='Instagram'
            className='textLogo'
          />
          <form className={searchActive ? 'searchActive' : 'search'}>
            <div
              className={searchActive ? 'magnifier active' : 'magnifier'}></div>
            <input
              type='text'
              autoCapitalize='none'
              placeholder='검색'
              value={searchValue}
              className={searchActive ? 'searchInput active' : 'searchInput'}
              onChange={this.onSearchInputChange}
              onFocus={() => this.setState({ searchActive: true })}
              onBlur={() =>
                this.setState({
                  searchValue: '',
                  searchActive: false,
                  showList: false,
                })
              }
              onKeyUp={this.searchId}
            />
            <span className={searchActive ? 'xbtn active' : 'xbtn'}></span>
            <div
              className={
                showList ? 'searchResultList' : 'searchResultList displayNone'
              }>
              {tempList.map((e) => (
                <div className='searchResultSet' key={e.id}>
                  <img
                    src={e.imgUrl}
                    alt='userProfile'
                    className='searchResultImg middle'
                  />
                  <span className='userId'>{e.userId}</span>
                </div>
              ))}
            </div>
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
      </div>
    );
  }
}

export default Nav;
