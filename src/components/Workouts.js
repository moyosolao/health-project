import React, { useState } from "react";
import "./Workouts.css"; // Import CSS file for additional styling
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";


const Workouts = () => {
    const navigate = useNavigate();

  const [workoutInput, setWorkoutInput] = useState("");
  const [durationInput, setDurationInput] = useState("");
  const [workoutsList, setWorkoutsList] = useState([]);

  const handleAddWorkout = () => {
    if (workoutInput.trim() !== "" && durationInput.trim() !== "") {
      setWorkoutsList([...workoutsList, { workout: workoutInput, duration: durationInput }]);
      setWorkoutInput("");
      setDurationInput("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Workouts</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={workoutInput}
          onChange={(e) => setWorkoutInput(e.target.value)}
          placeholder="Enter workout name"
        />
        <input
          className="input"
          type="text"
          value={durationInput}
          onChange={(e) => setDurationInput(e.target.value)}
          placeholder="Enter duration"
        />
        <button className="add-button" onClick={handleAddWorkout}>
          Add Workout
        </button>
      </div>
      <ul className="workouts-list">
        {workoutsList.map((workout, index) => (
          <li key={index} className="workout-item">
            <span className="workout-text">{workout.workout}</span>
            <span className="duration-text">{workout.duration}</span>
          </li>
        ))}
      </ul>
      <div style={styles.header}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backArrow}
        onClick={() => navigate("/Home")}
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

export default Workouts;
