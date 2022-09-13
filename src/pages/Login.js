import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/App.css';
import '../styles/login.css'
import AppFooter from '../components/footer';
import { createUseStyles } from 'react-jss'
import { useState } from 'react';
import styles from '../styles/login-styles.module.css'
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const styles_ = createUseStyles({
  AppFooter: {
    backgroundColor: 'grey'
  }
})
export default function Login() {
  const [focused, setFocused] = React.useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)


  const [inputs, setInputs] = useState({});

  const classes = styles_()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
      <div className='App-header'>
        <Link to={'/'}>
          <img src={logo} alt="logo" className='logo' style={{ cursor: 'pointer' }} />
        </Link>
        <div className='form-cont'>
          <h3>Sign In</h3>

          <form action="http://127.0.0.1:5000/login" onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email phone' 
              className='login' 
              placeholder='Email or Phone number' 
              name='email'
              value={inputs.email}
              onChange={handleChange}
              onFocus ={onFocus}
              onBlur={onBlur}
              
              {...register("email", 
                  { required: {
                    value: true,
                    message: 'Email cannot be empty'
                  },  
                    pattern: { 
                     value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                     message: 'Please enter a valid email'
                    }
                    })} />
                    <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                  />

            <input 
            type="password" 
            className='login' 
            placeholder='password' 
            name='password'
            value={inputs.password}
            onChange={handleChange} 
            {...register("password", { 
              required: {
                value :true,
                message : 'password cannot be empty'
              }, 
              pattern:{
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
              message : 'Please use a strong password'
            }
          })}
            />
            <ErrorMessage
                    errors={errors}
                    name="password"
                    render={({ message }) => <p>{message}</p>}
                  />

            <button type="submit" className='login-button'>Sign In</button>
          </form>

          <label htmlFor="remember-me" className='check-cont'>
          <input type="checkbox" name="remember-me" id="remember-me" /><span>Remember me</span>
          <span className='checkmark'></span>
          </label>
          <p className='need-help'><a href="#needhelp">Need Help?</a></p>

          <div className="final-content">
          <p>New to Netflix?</p>
          <Link to={'/'}>
          <a href="/signUp">Sign up Now</a>
          </Link>
          </div>
        </div>

      </div>

      <AppFooter className={classes.AppFooter}></AppFooter>

    </>
  )
}
