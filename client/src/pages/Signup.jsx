import React, { useState } from 'react'


const Signup = (props) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const onSignUp = () => {
    //Checking email contains '@' and entered passwords are same 
    if (!email.includes('@')) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
    if (password !== confirmPass) {
      setPasswordError(true)
    } else {
      setPasswordError(false)
    }

    //Checking all fields are entered or not
    if (name === '' || email === '' || password === '' || confirmPass === '') {
      alert('All fields are required!');
    }

  }

  return (
    <div className='mainContainer'>
      <div className='titleContainer'>
        <div>Sign up</div>
      </div>
      <br />
      <div className='inputContainer'>
        <input
          value={name}
          type='text'
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className='inputBox'
        />

      </div>
      <br />
      <div className='inputContainer'>
        <input
          value={email}
          type='email'
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          className={emailError ? 'inputBox errorLabel' : 'inputBox'}
        />
      </div>
      <br />
      <div className='inputContainer'>
        <input
          value={password}
          type='password'
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className='inputBox'
        />

      </div>
      <br />
      <div className='inputContainer'>
        <input
          type='password'
          placeholder="Confirm password"
          onChange={(e) => setConfirmPass(e.target.value)}
          className={passwordError ? 'inputBox errorLabel' : 'inputBox'}
        />

      </div>
      <br />
      <div className='inputContainer'>
        <input className='inputButton' type="button" onClick={onSignUp} value={'Sign Up'} />
      </div>
      <br />
      <div className='changePage'>
        Already have an account? <a href="/">Login</a>
      </div>
    </div>
  )
}

export default Signup