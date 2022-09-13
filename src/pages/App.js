import '../styles/App.css';
import Navbar from '../components/Navbar';
import AppSection from '../components/section';
import Appsection2 from '../components/section2';
import Appsection3 from '../components/section3';
import Appsection4 from '../components/section4';
import FAQ from '../components/faq';
import AppFooter from '../components/footer'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';
import {useNavigate} from 'react-router-dom'


function App() {
  const [inputEmail, setInputEmail] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate =  useNavigate();

  const handleChange = (event) => {
    const value = event.target.value;
    setInputEmail(value);
  }

  const onSubmit = (data) => {
    let headers = new Headers();
    headers.append('Origin','*');
    headers.append('Content-Type', 'application/json');
    fetch('http://127.0.0.1:5000/register', 
    {
      mode : 'cors',
      method: 'post',
      
      body : JSON.stringify({
        'email': data.email
      }),
      headers : headers
    })
    .then( res => {
      if (!res.ok) {
        throw Error(res.status);
       }
       return res.json();
      }
    )
    .then(
      data => console.log(data),
      // navigate('/signup')
    )
    .catch(
      ()=> {}
    )

  }
  const showLoader = () => {
    const loader = document.getElementById('loader');
    const submitBtn = document.getElementById('submitBtn');
    const input = document.getElementById('input')
    if(input.validity.valid === true){
    loader.style.display = 'block'
    submitBtn.innerText = ''
    loader.setAttribute('class', 'loading-style');
    input.setAttribute('class', 'loading-style_');
  }

}

  return (
    <div className="App">
      <header className='App-header'>
      <Navbar>
      </Navbar>

      <div className="home_content">
      <h3>
        Unlimited movies, TV <br /> shows, and more
      </h3>

      <h4>Watch anywhere. Cancel anytime</h4>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      </div>

      <div className="row">

        <form onSubmit={handleSubmit(onSubmit)} id='form'>
        <input 
        id='input'
        type='email' 
        placeholder='Email Address' 
        name='email'
        value={inputEmail.email}
        onChange={handleChange}
        
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

            <button type='submit' onClick={showLoader} id='submitBtn'>Get Started  &nbsp; <span> &#62;</span></button>
            <div id="loader"></div>
            <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                  />
        </form>
        </div>

      </header>
      <div className='divider'></div>
      <AppSection></AppSection>
      <div className='divider'></div>
      <Appsection2 style={{padding:'40px'}}></Appsection2>
      <div className='divider'></div>
      <Appsection3></Appsection3>
      <div className='divider'></div>
      <Appsection4></Appsection4>
      <div className='divider'></div>
      <FAQ></FAQ>
       <div className='divider'></div>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
