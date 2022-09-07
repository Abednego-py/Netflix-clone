import React from 'react'
import '../styles/footer.css'

export default function AppFooter() {
  return (
    <footer>
      <p className='sep first' style={{}}>Questions? Contact Us.</p>
      <div className="inner-cont_">
        <div className="col-3">
          <ul>
            <li><a href='#faq'>FAQ</a></li>
            <li><a href="#f">Investor Relations</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#speed">Speed Test</a></li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li><a href="#help">Help Center</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#cookie">Cookie preferences</a></li>
            <li><a href="#legal">Legal Notices</a></li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li><a href="#account">Account</a></li>
            <li><a href="#ways">Ways to Watch</a></li>
            <li><a href="#Cor">Corporate Information</a></li>
            <li><a href="#only">Only on Netflix</a></li>
          </ul>
        </div>
        <div className="col-3">
          <ul>
            <li><a href="media">Media Center</a></li>
            <li><a href="#terms">Terms of use</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <p className='sep'>Netflix Nigeria</p>
    </footer>
  )
}
