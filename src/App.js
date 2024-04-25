import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Account from './components/Account';
import Meals from './components/Meals';
import Charts from './components/Charts';
import Goals from './components/Goals';
import Home from './components/Home';
import Login from './components/Login';
import Workouts from './components/Workouts';


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgmpK_E9vPdLukVsb6DTPaKrf3iDb0LN4",
  authDomain: "seconddemo-5d09c.firebaseapp.com",
  projectId: "seconddemo-5d09c",
  storageBucket: "seconddemo-5d09c.appspot.com",
  messagingSenderId: "62024665938",
  appId: "1:62024665938:web:074db7ecba3d9efb9cc88b",
  measurementId: "G-V51M9SLXQ6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
        <Route path="/goals" element={isAuthenticated ? <Goals /> : <Navigate to="/login" />} />
        <Route path="/meals" element={isAuthenticated ? <Meals /> : <Navigate to="/Meals" />} />
        <Route path="/workouts" element={isAuthenticated ? <Workouts /> : <Navigate to="/Workouts" />} />
        <Route path="/charts" element={<Charts />} />
      </Routes>
    </Router>
  );
};

export default App;
