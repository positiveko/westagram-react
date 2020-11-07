import React, { Component } from 'react';
import './Nav.scss';

// const DataList = './searchdata.json'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
      searchInputValue: '',
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState((state) => ({
  //     searchActive: !state.searchActive,
  //   }));
  // }

  onSearchInputChange = (e) => {
    this.setState({
      searchInputValue: e.target.value,
    });
  };

  render() {
    return (
      <div className='Nav'>
        <div className='NavWrapper'>
          <img
            src='images/eunjungko/logo_text.png'
            alt='Instagram'
            className='textLogo'
          />
          <form className={this.state.searchActive ? 'searchActive' : 'search'}>
            <div
              className={
                this.state.searchActive ? 'magnifier active' : 'magnifier'
              }></div>
            <input
              type='text'
              autoCapitalize='none'
              placeholder='검색'
              value={this.state.searchInputValue}
              className={
                this.state.searchActive ? 'searchInput active' : 'searchInput'
              }
              onChange={this.onSearchInputChange}
              onFocus={() => this.setState({ searchActive: true })}
              onBlur={() =>
                this.setState({ searchInputValue: '', searchActive: false })
              }
            />
            <span
              className={
                this.state.searchActive ? 'xbtn active' : 'xbtn'
              }></span>
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
      </div>
    );
  }
}

export default Nav;
