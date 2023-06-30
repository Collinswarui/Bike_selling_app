import React, {useState} from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';


function LandingPage() {
    
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

    return (
        <div className='container'>
    
            <h3 className='text-center'style={{color: 'white'}}>Welcome to our Bike selling App</h3>
            <p className="responsive-paragraph" style={{color: 'white'}}>Join our community and explore a wide range of bikes</p>
            <div className='row'>
                <div className='col-md-6'>
                {!showSignUp && !showLogin && (
        <div className="signup-button-container"> 
        <button className="btn btn-primary btn-sm" onClick={handleSignUpClick}>
          Sign Up
        </button>
        <button className='btn btn-primary btn-sm' onClick={handleLoginClick}>
         Login
       </button>
        </div>
        
      )}

      {showSignUp && <SignupForm handleSignUpClick={handleSignUpClick} />}
      {showLogin && <LoginForm />}
          
                </div>
            </div>
            
        </div>
   
    );
}

export default LandingPage;
