import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')

  const onLogin = () => {
  //Checking entered email contains '@' 
    if(!email.includes('@')){
      setEmailError(true) 
    }else{
      setEmailError(false)
    }
  //Checking all fields are entered or not
  if( email === '' || password ==='' ){
    alert('All fields are required!');
  }else{

  }
}

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          type='email'
          placeholder="Enter your email here"
          onChange={(e) => setEmail(e.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(e) => setPassword(e.target.value)}
          className={'inputBox'}
        />
      </div>
      <br />
      <div className={'inputContainer'}>
      <input className={'inputButton'} type="button" onClick={onLogin} value={'Log in'} />
      </div>
      <br />
      <div className='changePage'>
        Don't have an account yet? <a href="/signup">Sign up</a>
      </div>
    </div>
  )
}

export default Login