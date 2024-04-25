import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (err) {
      setError("Login failed: " + err.message); // Provides more specific error message from Firebase
    }
  };
  return (
    <div style={styles.login}>
      <img
        style={styles.heart1Icon}
        src={require("../assets/ECG-heart.png")}  // Adjust path as necessary
        alt="Heart Icon"
      />
      <p style={styles.theOnlyHealthContainer}>
        The only health app you need!
      </p>
      <div style={styles.rectangleParent}>
        <label style={styles.label}>Email:</label>
        <input 
          style={styles.input} 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
        />
        <label style={styles.label}>Password:</label>
        <input 
          style={styles.input} 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password" 
        />
        <button 
          style={styles.logIn} 
          onClick={handleLogin}  // Use handleLogin here to trigger the login process
        >
          Log In
        </button>
        {error && <p style={styles.error}>{error}</p>} 
        <p 
          style={styles.newUserSign} 
          onClick={() => navigate("/signup")}
        >
          New User? Sign Up Now!
        </p>
      </div>
      
      
    </div>
  );
};

const styles = {
  login: {
    backgroundColor: '#000000',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
  },
  rectangleParent: {
    width: '90%',
    maxWidth: '500px',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202020',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: '5px',
    fontSize: '1rem',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #333',
    fontSize: '1rem',
  },
  logIn: {
    backgroundColor: '#c10000',
    color: '#FFFFFF',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  newUserSign: {
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#FFFFFF',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  heart1Icon: {
    marginTop: '20px',
    width: '50%',
    maxWidth: '300px',
  },
  error: {
    color: 'red',
    marginTop: '10px',
  },
  theOnlyHealthContainer: {
    marginTop: '15px',
    fontSize: '1.2rem',
    textAlign: 'center',
    width: '80%',
  }
};

export default Login;
