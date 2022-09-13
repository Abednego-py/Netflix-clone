import React from 'react'
import '../styles/footer.css'

function Footer2() {
  return (
    <footer style={{backgroundColor:'#fff'}}>
    <p className='sep first' style={{}}>Questions? Contact Us.</p>
    <div className="inner-cont_">
      <div className="col-3">
        <ul>
          <li><a href='#faq'>FAQ</a></li>
          <li><a href="#f">Cookie Preferences</a></li>
        </ul>
      </div>
      <div className="col-3">
        <ul>
          <li><a href="#help">Help Center</a></li>
          <li><a href="#jobs">Cooperate Information</a></li>
        </ul>
      </div>
      <div className="col-3">
        <ul>
          <li><a href="#account">Terms of use</a></li>
        </ul>
      </div>
      <div className="col-3">
        <ul>
          <li><a href="#terms">Privacy</a></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer2