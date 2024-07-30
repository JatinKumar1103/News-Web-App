import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Import axios for making HTTP requests
import backgroundImage from '../assets/beams-basic.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import {Link} from 'react-router-dom'

function Forms(props) {
  const [showPassword, setShowPassword] = useState(false);
  const showForgotPassword = props.button === 'Sign in';
  const navigate = useNavigate(); // Initialize useNavigate
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    

    // Get form data
    const formData = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      // Send form data to backend server to verify credentials
      const response = await axios.post('https://news-web-app-backend-re7n.onrender.com/api/login', formData); // Assuming your backend server is running on localhost:3003 and has an endpoint for login
      console.log(response.data); 
      if (response.data.success) {
        //storing user data
        const user = response.data.user;
        props.setUserDetails(user);
        // alert('Login successful!');
        // Redirect the user to the authenticated area of your application
        navigate('/authenticated-area');
        props.setIsLoggedIn(true);

        
      } else {
        // Handle invalid credentials scenario
        alert('Invalid email or password. Please try again.');
      }
    }
     catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in. Please try again later.');
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      // Send form data to backend server
      const response = await axios.post('https://news-web-app-backend-re7n.onrender.com/api/register', formData); // Assuming your backend server is running on localhost:3003
      console.log(response.data); // Log response from backend
      // alert('Registration successful!');
      // Redirect to the success page after successful registration
      navigate('/registration-success');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred while registering. Please try again later.');
    }
  };

  return (
    <div className="border" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh', // Ensure the div covers the entire viewport height
    }}>
      <div className="row justify-content-center ">
        <div className="col-md-6 mt-5 border rounded p-5">
          <h2 className="text-center mb-4">{props.formtitle}</h2>
          <form className={props.button} onSubmit={props.button==='Sign up'?handleSubmit:handleSubmitLogin}> {/* Call handleSubmit on form submission */}
            {!showForgotPassword && (<div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                autoComplete="name"
                required
                placeholder='your name'
              />
            </div>)}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                autoComplete="email"
                required
                placeholder='your email'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">{props.Password}</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  autoComplete="current-password"
                  required
                  placeholder='password'
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={togglePasswordVisibility}
                >
                  {!showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </button>
              </div>
              {showForgotPassword && (
                <div id="passwordHelp" className="form-text">
                  <Link href="#" className="text-decoration-none">Forgot password?</Link>
                </div>
              )}
            </div>
            <div className="mb-3">
              <button style={{height:'3rem'}}
                type="submit"
                className="btn btn-outline-dark w-100  mx-auto d-block"
              >
                {props.formtitle}
              </button>
            </div>
          </form>
          {props.formtitle === "Sign in" && (
            <p className="text-center text-secondary">Not a member?{' '}
              <Link href="#" className="fw-bold text-dark">Start a 14 day free trial</Link>
            </p>
          )}

          {/* Sign up/Sign in with Google and Facebook */}
          <div className="mt-3 " style={{ display: 'flex', justifyContent: 'space-around', margin: '1rem' }}>
            <button className="btn btn-outline-dark w-50 mx-4 ">
              {props.button} With&nbsp; <img style={{height:'2rem',marginBottom:'.2rem'}} src={props.google}/>
            </button>

            <button className="btn btn-outline-dark w-50 mx-4">
              {props.button} With &nbsp;<img style={{height:'2rem',marginBottom:'.2rem'}} src={props.facebook}/>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
