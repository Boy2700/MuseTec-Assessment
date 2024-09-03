import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      window.location.href = '/dashboard';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
  <div className="login-content">
    <img src="https://media.istockphoto.com/id/1434093717/photo/cheerful-young-european-guy-giving-gift-box-to-surprise-woman-on-couch-in-living-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=-YsRJszfhjRQI_3L5gzcl-QXb2O6tNGcYN8kglOwKu0=" alt="Login Illustration" className="login-image" />
    <form onSubmit={handleLogin} className="login-form">
      <img id="logo" src="https://media.istockphoto.com/id/1877384516/photo/the-letter-p-is-embedded-with-a-picture-of-the-animal-parrot-great-animal-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=6ESDTgLoFXb_qQGcUazOZRF5TcsubNddk9hxCIUUfc4=" alt="P logo"></img>
      <h2>Welcome! Begin your Journey.</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign up</button>
      <p>Already have an Account? <a href='##'>Sign in</a></p>
      <p>Are you a vendor? <a href='##'>Start Here</a></p>

  <div class="links-container">
  <div class="link-item">Privacy Policy</div>
  <div class="link-item">Terms Conditions</div>
  <div class="link-item">Support</div>
</div>

    </form>

  </div>
</div>

  );
};

export default Login;
