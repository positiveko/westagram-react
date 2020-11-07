import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';
import '../../../Styles/common.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      hiddenPW: true,
    };
  }

  handleIdChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  showPassword = () => {
    this.setState({ hiddenPW: !this.state.hiddenPW });
  };

  checkValidation = (e) => {
    e.preventDefault();
    const { id, password } = this.state;
    console.log(id);
    console.log(password);
    const checkId = id.includes('@');
    const checkPw = password.length > 4;
    if (checkId && checkPw) {
      this.props.history.push('/Main');
    }
    if (!checkId) {
      alert('아이디는 @를 포함해야 합니다!');
    }
    if (!checkPw) {
      alert('비밀번호는 5자 이상입니다!');
    }
  };

  render() {
    const { id, password, hiddenPW } = this.state;
    let activateBtn = (id.length && password.length) !== 0;
    return (
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
            onChange={this.handleIdChange}
          />
          <input
            type={hiddenPW ? 'password' : 'text'}
            className='pw'
            placeholder='비밀번호'
            value={password}
            onChange={this.handlePasswordChange}
          />
          <span className='showPw' onClick={this.showPassword}>
            {hiddenPW ? 'Show' : 'Hide'}
          </span>
          <button
            className='loginBtn'
            type='submit'
            onClick={this.checkValidation}
            onKeyUp={this.checkValidation}
            className={activateBtn ? 'active' : ''}>
            로그인
          </button>
        </form>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default withRouter(Login);
