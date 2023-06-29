import React, {useState} from 'react';
import SignupForm from './SignupForm';
import 'bootstrap/dist/css/bootstrap.css';


function LandingPage() {
    const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

    return (
        <div className='container'>
            <h3 className='text-center'>Welcome to our Bike selling App</h3>
            <p className="responsive-paragraph">Join our community and explore a wide range of speed bikes</p>
            <div className='row'>
                <div className='col-md-6'>
                {!showSignUp && (
        <button className="btn btn-primary" onClick={handleSignUpClick}>
          Sign Up
        </button>
      )}

      {showSignUp && <SignupForm />}
          
                </div>
            </div>
            
        </div>
    );
}

export default LandingPage;
