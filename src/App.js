import './styles/App.css';
import Navbar from './components/Navbar';
import AppSection from './components/section';
import Appsection2 from './components/section2';
import Appsection3 from './components/section3';
import Appsection4 from './components/section4';
import FAQ from './components/faq';
import AppFooter from './components/footer'
function App() {
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
        <form action="">
        <input type='email' placeholder='Email Address'/> <button type='submit'>Get Started  &nbsp; <span> &#62;</span></button>
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
