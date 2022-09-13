import React from 'react'
import '../styles/faq.css'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';

function toggleContent(event) {
    let content = event.target.className.substring(9);
    let questionCont =  document.getElementsByClassName(content)[0];
    questionCont.classList.toggle('active')
    let answerCont =  questionCont.nextElementSibling;   
    if(answerCont.style.display === 'block'){
        answerCont.style.display = 'none'
    }
    else {
    answerCont.style.display = 'block'
    }
}

export default function FAQ() {

    const [inputEmail_, setInputEmail_] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleChange = (event) => {
        const value = event.target.value;
        setInputEmail_(value);
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

  return (
    <div className='cont'>
        <h2 className='title'>Frequently Asked Questions</h2>
        <div className="inner-cont">        
        <div className="topic">
            <h3 className='question question-1' onClick={toggleContent}>
                What is Netflix?
            </h3>
                <p className='answer'>
                Netflix is a streaming service that offers a wide variety of <br />
                 award-winning TV shows, movies, anime, documentaries, and <br />
                  more on thousands of internet-connected devices.
                  <br />
                  <br />    
                You can watch as much as you want, whenever you want <br />
                 without a single commercial – all for one low monthly price. <br />
                  There's always something new to discover and new TV shows <br />
                   and movies are added every week!
                </p>
        </div>

        <div className="topic">
            <h3 className='question question-2' onClick={toggleContent}>
                How much does Netflix cost?
            </h3>
                <p className="answer">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                <br /> streaming device, all for one fixed monthly fee. Plans range
                <br /> from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.
                </p>
        </div>

        <div className="topic">
            <h3 className='question question-3' onClick={toggleContent}>
                Where can I watch?
            </h3>
                <p className="answer">
                Watch anywhere, anytime. Sign in with your Netflix account to
                <br /> watch instantly on the web at netflix.com from your personal 
                 <br /> computer or on any internet-connected device that offers the 
                 <br /> Netflix app, including smart TVs, smartphones, tablets,
                 <br /> streaming media players and game consoles.

                 <br />
                  <br />   
                You can also download your favorite shows with the iOS,
                <br /> Android, or Windows 10 app. Use downloads to watch while
                <br /> you're on the go and without an internet connection. Take 
                <br /> Netflix with you anywhere.
                </p>
        </div>
        <div className="topic">
            <h3 className='question question-4' onClick={toggleContent}>
                How do I cancel?
            </h3>
            {/* <i class="fa fa-regular fa-plus"></i>
            <i class="fa fa-solid fa-xmark"></i> */}
                <p className="answer">
                Netflix is flexible. There are nopesky contracts
                <br />  and no commitments. You can easily cancel your account online in two
                <br /> clicks. There are no cancellation fees – start or stop your account anytime.
                </p>
        </div>
        <div className="topic">
            <h3 className='question question-5' onClick={toggleContent}>
                What can I watch on Netflix?
            </h3>
            
                <p className="answer">
                Netflix has an extensive library of feature films, documentaries,
                <br /> TV shows, anime, award-winning Netflix originals, and more.
                <br /> Watch as much as you want, anytime you want.
                </p>
        </div>
        <div className="topic">
            <h3 className='question question-6' onClick={toggleContent}>
                Is Netflix good for kids?
            </h3>
    
                <p className="answer">
                The Netflix Kids experience is included in your membership to
                <br /> give parents control while kids enjoy family-friendly TV shows
                <br /> and movies in their own space.
                <br />
                  <br />   
                Kids profiles come with PIN-protected parental controls that let 
                <br /> you restrict the maturity rating of content kids can watch and 
                <br /> block specific titles you don’t want kids to see. 
                </p>
        </div>
        </div>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input 
        type='email' 
        placeholder='Email Address' 
        name='email'
        value={inputEmail_.email}
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

            <button type='submit'>Get Started  &nbsp; <span> &#62;</span></button>
            <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p>{message}</p>}
                  />

                  </form>
    </div>
  )
}
