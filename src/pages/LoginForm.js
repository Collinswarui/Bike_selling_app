import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/signup.css';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            if (response.ok) {
              console.log('Login succesful');
              //redirect to another page
              navigate('/bikes'); 
            } else{
                console.error('Login failed');
                // Display an error message to the user or take appropriate action.

            }
        } catch (error) {
            console.error('An error occurred during login', error);
            // Handle the error, e.g., show an error message to the user.

        }
    };
    return (
        <div>
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <div>
               <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>

          </form>
        </div>
      );

}

export default LoginForm;