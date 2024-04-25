import * as React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Goals.css"; // Import CSS file for additional styling

const Goals = () => {
  const navigate = useNavigate();


  const [goalInput, setGoalInput] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const handleAddGoal = () => {
    if (goalInput.trim() !== "") {
      setGoalsList([...goalsList, { text: goalInput, checked: false }]);
      setGoalInput("");
    }
  };

  const handleInputChange = (event) => {
    setGoalInput(event.target.value);
  };

  const handleCheckboxChange = (index) => {
    const updatedGoals = [...goalsList];
    updatedGoals[index].checked = !updatedGoals[index].checked;
    setGoalsList(updatedGoals);
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = goalsList.filter((_, i) => i !== index);
    setGoalsList(updatedGoals);
  };

  return (
    <div className="container">
      <h1 className="title">Goals</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={goalInput}
          onChange={handleInputChange}
          placeholder="Enter your goal"
        />
        <button className="add-button" onClick={handleAddGoal}>
          Add Goal
        </button>
      </div>
      <ul className="goals-list">
        {goalsList.map((goal, index) => (
          <li key={index} className="goal-item">
            <input
              type="checkbox"
              checked={goal.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className={goal.checked ? "goal-text checked" : "goal-text"}>
              {goal.text}
            </span>
            <button className="delete-button" onClick={() => handleDeleteGoal(index)}>
              Delete
            </button>
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
export default Goals;
