import React, { Component } from 'react';
import './Nav.scss';
import SEARCH from './SearchData';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchActive: false,
      searchValue: '',
      searchPool: SEARCH,
      filteredUser: [],
      isListActive: false,
    };
  }

  onSearchInputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  handleBlur = (e) => {
    const isEmpty = !e.target.value;
    console.log(isEmpty);
    this.setState({ isListActive: !isEmpty });
  };

  searchId = (e) => {
    e.preventDefault();
    const { searchValue, searchPool } = this.state;
    if (!searchValue.trim())
      return this.setState({ isListActive: false, isSearchActive: false });
    const searchKeywords = searchValue.split(' ');
    let tempSearchPool = [...searchPool];
    let filteredUser = [];
    searchKeywords.forEach((key) => {
      if (key !== '') {
        filteredUser = tempSearchPool.filter((user) => {
          if (user.userId.includes(key)) {
            return true;
          }
        });
        tempSearchPool = [...filteredUser];
      }
    });
    if (filteredUser.length == 0) {
      return this.setState({ isListActive: false });
    }
    this.setState({ filteredUser, isListActive: filteredUser ? true : false });
  };

  render() {
    const {
      isSearchActive,
      searchValue,
      isListActive,
      filteredUser,
    } = this.state;

    return (
      <div className='NavEunjung'>
        <div className='NavWrapper'>
          <img
            src='images/eunjungko/logo_text.png'
            alt='Instagram'
            className='textLogo'
          />
          <form className={isSearchActive ? 'search active' : 'search'}>
            <div className='magnifier'></div>
            <input
              type='text'
              autoCapitalize='none'
              placeholder='검색'
              value={searchValue}
              className='searchInput'
              onChange={this.onSearchInputChange}
              onFocus={() => this.setState({ isSearchActive: true })}
              onBlur={() =>
                this.setState({ isListActive: false, isSearchActive: false })
              }
              onKeyUp={this.searchId}
            />
            <span className='xbtn'></span>
            <div
              className={
                isListActive
                  ? 'searchResultList'
                  : 'searchResultList displayNone'
              }>
              {filteredUser.map((e) => (
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
