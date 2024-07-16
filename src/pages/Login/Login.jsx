import React, { useState } from 'react';
import '../Login/Login.css';
import { ReactComponent as Logo } from '../Login/verve.svg';
import bgvideo from '../Login/bgvideo.mp4';

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formValues, setFormValues] = useState({
    businessName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (isSignUp && !formValues.businessName) {
      newErrors.businessName = 'Business Name is required';
    }
    if (!formValues.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formValues.password) {
      newErrors.password = 'Password is required';
    } else if (formValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission (e.g., API request)
      console.log('Form submitted:', formValues);
      setErrors({});
      onLogin();  // Call the onLogin function to update the login state
    }
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
    setFormValues({ businessName: '', email: '', password: '' });
    setErrors({});
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
    setFormValues({ email: '', password: '' });
    setErrors({});
  };

  const containerClassName = `container ${isSignUp ? 'right-panel-active' : ''}`;

  return (
    <div className='Login'>
      <video autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
      </video>
      <div className={containerClassName}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleFormSubmit}>
            <Logo />
            <h2>Welcome to <span>VerveAR</span></h2>
            <input
              type='text'
              placeholder='Business Name'
              name='businessName'
              value={formValues.businessName}
              onChange={handleInputChange}
            />
            {errors.businessName && <span className="error">{errors.businessName}</span>}
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={formValues.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formValues.password}
              onChange={handleInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleFormSubmit}>
            <Logo />
            <h1>Login to <span>VerveAR</span></h1>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={formValues.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formValues.password}
              onChange={handleInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back</h1>
              <p className='inner_text'>where every login unlocks infinite virtual realms of possibility</p>
              <button onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend</h1>
              <p className='inner_text'>Embark on an immersive journey with us! Sign up now to unlock the future of virtual reality experiences</p>
              <button onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
