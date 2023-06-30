import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/signup.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [isSmall, setIsSmall] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('An error occurred during registration', error);
    }
    console.log('Form submitted:', formData);

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  const handleSignUpClick = () => {
    setIsSmall(true);
  };

  return (
    <div className={`signup-container ${isSmall ? 'small' : ''}`}>
      <form onSubmit={handleSignupSubmit} className='signup-form'>
        <h2 className='heading2'>Create Account</h2>
        <div className='row'>
          <div className='col-md-6 mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name:
            </label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className='col-md-6 mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Last Name:
            </label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password:
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type='submit' className='btn btn-primary' onClick={handleSignUpClick}>
          Sign Up
        </button>
        <div>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;