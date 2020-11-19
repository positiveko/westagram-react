import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import '../../../Styles/common.scss';

// const API = 'http://10.58.4.129:8000/user/login';

class LoginEj extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      hiddenPW: true,
      isLogin: localStorage.getItem('token'),
    };
  }

  showPassword = () => {
    this.setState({ hiddenPW: !this.state.hiddenPW });
  };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  checkValidation = (e) => {
    e.preventDefault();
    const { id, password } = this.state;
    const checkId = id.includes('@');
    const checkPw = password.length > 7;
    if (checkId && checkPw) {
      this.props.history.push('/MainEj');
    }
    if (!checkId) {
      return alert('아이디는 @를 포함해야 합니다!');
    }
    if (!checkPw) {
      return alert('비밀번호는 8자 이상입니다!');
    }

    // fetch(API, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: id,
    //     password: password,
    //     phone_number: '01098580906',
    //     name: 'edie',
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result) {
    //       localStorage.setItem('hyun', result.token);
    //       this.props.history.push('/Main');
    //     } else {
    //       alert('아이디 확인하기');
    //     }
    //   })
    //   .catch((error) => console.log(error));
  };

  render() {
    const { id, password, hiddenPW } = this.state;
    let activateBtn = (id.length && password.length) !== 0;
    return (
      <div className='LoginEj'>
        <div className='Login'>
          <img
            className='logo'
            src='images/eunjungko/logo_text.png'
            alt='instagram logo'
            srcSet=''
          />
          <form className='loginForm'>
            <input
              type='text'
              className='id'
              placeholder='전화번호, 사용자 이름 또는 이메일'
              value={id}
              name='id'
              onChange={this.handleInput}
            />
            <input
              type={hiddenPW ? 'password' : 'text'}
              className='pw'
              placeholder='비밀번호'
              value={password}
              name='password'
              onChange={this.handleInput}
            />
            <span className='showPw' onClick={this.showPassword}>
              {hiddenPW ? 'Show' : 'Hide'}
            </span>
            <button
              className='loginBtn'
              type='submit'
              onClick={this.checkValidation}
              className={activateBtn ? 'active' : ''}>
              로그인
            </button>
          </form>
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginEj);
