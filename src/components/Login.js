import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import '../styles/App.css';
import '../styles/login.css'
import AppFooter from './footer';
import { createUseStyles } from 'react-jss'
import { useState } from 'react';
import styles from '../styles/login-styles.module.css'
import { useForm } from "react-hook-form";

const styles_ = createUseStyles({
  AppFooter: {
    backgroundColor: 'grey'
  }
})
export default function Login() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

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

          <form action="/App.js" onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email phone' 
              className='login' 
              placeholder='Email or Phone number' 
              name='email'
              value={inputs.email}
              onChange={handleChange}
              {...register("email", 
                  { required: true,  
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                    })} />

          {errors.email && <p>Please enter a valid email</p>}

            <input 
            type="password" 
            className='login' 
            placeholder='password' 
            name='password'
            value={inputs.password}
            onChange={handleChange} 
            {...register("password", { 
              required: true, 
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
          })}
            />
            {errors.password && <p>Please check the Password</p>}

            <button type="submit" className='login-button'>Sign In</button>
          </form>
          <label htmlFor="remember-me" className='check-cont'>
          <input type="checkbox" checked name="remember-me" id="remember-me" />Remember me
          <span className='checkmark'></span>
          </label>
          <p><a href="#needhelp">Need Help?</a></p>

          <p>New to Netflix?</p><a href="/signUp">Sign up Now</a>
        </div>

      </div>

      <AppFooter className={classes.AppFooter}></AppFooter>

    </>
  )
}
