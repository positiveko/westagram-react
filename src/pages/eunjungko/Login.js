import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  goToMain = () => {
    this.props.history.push('/Main');
  };

  handleInputValue = (e) => {
    console.log('yes');
  };

  // 실제 활용 예시
  // goToMain = () => {
  //   if(response.message === "valid user"){
  //     this.props.history.push('/main');
  //   } else {
  //     alert("너 우리 회원 아님. 가입 먼저 해주세요")
  //     this.props.history.push('/signup');
  //   }
  // }

  render() {
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
            onClick={() => this.handleInputValue()}
          />
          <input
            type='password'
            className='pw'
            placeholder='비밀번호'
            onClick={() => this.handleInputValue()}
          />
          <button
            className='loginBtn'
            type='submit'
            onClick={() => this.goToMain()}>
            로그인
          </button>
        </form>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default withRouter(Login);
