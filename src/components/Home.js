import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.home}>
      <h1 style={styles.helloUser}>FitTrack</h1>
      <h2 style={styles.home1}>Home</h2>
      <p style={styles.overview}>Overview</p>
      <button style={styles.homeInner} onClick={() => navigate("/goals")}>
        Go to Goals
      </button>
      <button style={styles.homeInner} onClick={() => navigate("/charts")}>
      Charts
      </button>
      <button style={styles.homeInner} onClick={() => navigate("/meals")}>
        Meal Logs
      </button>
      <button style={styles.homeInner} onClick={() => navigate("/workouts")}>
      Workouts
      </button>

      <div style={styles.header}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backArrow}
        onClick={() => navigate("/Login")}
      />
      <FontAwesomeIcon
        icon={faUser}
        style={styles.profileIcon}
        onClick={() => navigate("/Account")}
      />
    </div>
    </div>
  );
};

const styles = {
  home: {
    backgroundColor: '#000000',
    flex: 1,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    fontFamily: 'Arial, sans-serif',
  },
  chartsButton: {
    backgroundColor: 'transparent', // Makes the background invisible
    border: 'none', // Removes the border
    color: '#FFFFFF', // Text color
    fontSize: '1.5rem', // Text size
    cursor: 'pointer', // Changes cursor to pointer on hover
    padding: '10px 20px', // Padding around the text
    textAlign: 'center', // Centers the text inside the button
    textDecoration: 'underline', // Underlines the text
    display: 'inline-block', // Necessary for padding and dimensions
    outline: 'none', // Removes the outline on focus for a clean look
  },
  helloUser: { fontSize: '3rem' },
  home1: { fontSize: '2rem' },
  otherCategories: { fontSize: '1.5rem' },
  overview: { fontSize: '1.5rem' },
  homeChild: {
    backgroundColor: '#DC143C',
    width: '90%',
    height: '50px',
    borderRadius: '24px',
  },
  homeItem: {
    backgroundColor: '#DC143C',
    width: '90%',
    height: '50px',
    borderRadius: '24px',
  },
  homeInner: {
    padding: '20px',
    fontSize: '24px',
    backgroundColor: '#4CAF50', /* Green background */
    color: 'black', /* Black lettering */
    borderRadius: '12px', /* Smooth corners */
    cursor: 'pointer',
    transition: '0.3s ease', /* Smooth color transition */
},
 

  charts: { fontSize: '1.5rem' },
  healthCoach: { fontSize: '1.5rem' },
  steps: { fontSize: '1.5rem' },
  productivity: { fontSize: '1.5rem' },
  goals: { fontSize: '1.5rem' },
  workoutMeal: { fontSize: '1.5rem' },
  iconArrowBackCircleSharp: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
  },
  vuesaxboldprofileCircle: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
  },
  leftIcon: {
    marginLeft: "10px", // Adjust as necessary
  },
  rightIcon: {
    marginRight: "10px", // Adjust as necessary
  },
  icon: {
    fontSize: "24px",
    cursor: "pointer",
  },
};

export default Home;
