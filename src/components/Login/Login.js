import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='wrapper'>
      <div className='login_container'>
        <h1 className='login_container_heading'>Welcome Back!</h1>
        <h3 className='login_container_subheading'>Enter your Credentials to access your account</h3>
        <form className='login_container_form'>
            <label for='email'>Email address</label>
            <input type='email' className='login_container_form_email' id='email' placeholder='Enter your email'></input>
            <label for='password'>Password</label>
            <input type='password' className='login_container_form_password' id='password' placeholder='Name'></input>
            <div className='login_container_form_checkbox_container'>
              <input type='checkbox' className='login_container_form_checkbox' id='remember'></input>
              <label for='Remember'>Remember me for 30 days</label>
            </div>
            <button className='login_container_form_submit'>Login</button>
        </form>
    </div>
    </div>
  )
}

export default Login
